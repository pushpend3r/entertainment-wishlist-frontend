import { useMutation } from "@apollo/client";
import { FormEvent, useEffect } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { REGISTER } from "./queries";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { showToast } from "../../utils";
import { Register } from "./types";

function RegisterPage() {
  const [register, { data }] = useMutation<Register>(REGISTER);

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_accessToken, setAccessToken] = useLocalStorage("accessToken");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_refreshToken, setRefreshToken] = useLocalStorage("refreshToken");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    const name = data.get("name");
    const email = data.get("email");
    const password = data.get("password");

    showToast(
      register({
        variables: {
          name,
          email,
          password,
        },
      }),
      {
        success: "account created successfully",
        error: "failed to create account",
        pending: "creating your account",
      }
    );
  };

  useEffect(() => {
    if (!data) return;
    const { accessToken, refreshToken } = data.createUser || {};

    if (!accessToken || !refreshToken) return;

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

    navigate("/");
  }, [data, navigate, setAccessToken, setRefreshToken]);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        height: `calc(100vh - 100px)`,
      }}
    >
      <div style={{ width: "500px" }}>
        <h1>Register</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" placeholder="your secret password" />
          </Form.Group>
          <Button type="submit">Register</Button>
        </Form>
      </div>
    </Container>
  );
}

export default RegisterPage;
