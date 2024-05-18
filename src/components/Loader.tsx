import Container from "react-bootstrap/Container";
import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
        height: `calc(100vh - 100px)`,
      }}
    >
      <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
    </Container>
  );
}

export default Loader;
