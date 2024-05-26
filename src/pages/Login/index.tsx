import { useMutation } from "@apollo/client";
import { FormEvent, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";

import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";

import { LOGIN } from "./queries";
import { showToast } from "../../utils";
import { Login } from "./types";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import { ROUTES } from "../../enums/routes";

function LoginPage() {
  const [login, { data, loading }] = useMutation<Login>(LOGIN);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_accessToken, setAccessToken] = useLocalStorage("accessToken");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_refreshToken, setRefreshToken] = useLocalStorage("refreshToken");

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    const email = data.get("email");
    const password = data.get("password");

    showToast(login({ variables: { email, password } }), {
      success: "logged in",
      pending: "logging in",
      error: "failed to log you in",
    });
  };

  useEffect(() => {
    if (!data) return;
    const { accessToken, refreshToken } = data.login || {};

    if (!accessToken || !refreshToken) return;

    setAccessToken(accessToken);
    setRefreshToken(refreshToken);

    navigate(ROUTES.HOME_PAGE);
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
        <h1>Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" name="email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="your secret password" name="password" />
          </Form.Group>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    </Container>
  );
}

export default LoginPage;
