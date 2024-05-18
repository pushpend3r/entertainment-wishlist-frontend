import { useMutation } from "@apollo/client";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import { FormEvent, useEffect } from "react";
import { showToast } from "../../utils";
import Loader from "../../components/Loader";
import { Container, Form } from "react-bootstrap";
import Button from "../../components/Button";
import { UpdatePassword } from "./types";
import { UPDATE_PASSWORD } from "./queries";

function PasswordChangePage() {
  const [updatePassword, { data, loading }] = useMutation<UpdatePassword>(UPDATE_PASSWORD);

  const [accessToken, setAccessToken] = useLocalStorage("accessToken");
  const [refreshToken, setRefreshToken] = useLocalStorage("refreshToken");

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    const oldPassword = data.get("oldPassword");
    const newPassword = data.get("newPassword");

    showToast(updatePassword({ variables: { oldPassword, newPassword, accessToken, refreshToken } }), {
      success: "password updated",
      pending: "updating password",
    });
  };

  useEffect(() => {
    if (!data) return;
    const { accessToken, refreshToken } = data.updatePassword || {};

    if (!accessToken || !refreshToken) return;

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

    navigate("/");
  }, [data, navigate, setAccessToken, setRefreshToken]);

  if (loading) return <Loader />;

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        height: `calc(100vh - 100px)`,
      }}
    >
      <div style={{ width: "500px" }}>
        <h1>Password Change</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Old Password</Form.Label>
            <Form.Control type="password" placeholder="old password" name="oldPassword" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="new password" name="newPassword" />
          </Form.Group>
          <Button type="submit">Update Password</Button>
        </Form>
      </div>
    </Container>
  );
}

export default PasswordChangePage;
