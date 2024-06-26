import { useMutation } from "@apollo/client";
import { FormEvent, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { REGISTER } from "./queries.graphql";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "@uidotdev/usehooks";
import { showToast } from "../../utils";
import Button from "../../components/Button";
import { ROUTES } from "../../enums/routes";
import { RegisterMutationVariables } from "../../gql/graphql";

function RegisterPage() {
  const [register, { data }] = useMutation(REGISTER);

  const navigate = useNavigate();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_accessToken, setAccessToken] = useLocalStorage("accessToken");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_refreshToken, setRefreshToken] = useLocalStorage("refreshToken");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.target as HTMLFormElement);

    const registerMutationVariables = {
      name: data.get("name"),
      email: data.get("email"),
      password: data.get("password"),
    } as RegisterMutationVariables;

    showToast(
      register({
        variables: registerMutationVariables,
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

    navigate(ROUTES.HOME_PAGE);
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
