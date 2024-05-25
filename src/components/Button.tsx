import Spinner from "react-bootstrap/Spinner";
import { ButtonProps, default as BButton } from "react-bootstrap/Button";

interface Props extends ButtonProps {
  loading?: boolean;
}

function Button({ loading = false, children, ...props }: Props) {
  return (
    <BButton {...props}>
      {loading ? (
        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" data-testid="loader" />
      ) : (
        children
      )}
    </BButton>
  );
}

export default Button;
