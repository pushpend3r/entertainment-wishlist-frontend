import { ButtonProps, Button as BButton, Spinner } from "react-bootstrap";

interface Props extends ButtonProps {
  loading?: boolean;
}

function Button({ loading = false, children, ...props }: Props) {
  return (
    <BButton {...props}>
      {loading ? (
        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
      ) : (
        children
      )}
    </BButton>
  );
}

export default Button;
