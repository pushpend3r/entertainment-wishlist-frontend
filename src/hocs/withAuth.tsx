import { ComponentProps, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useIsUserLoggedIn from "../hooks/useIsUserLoggedIn";

function withAuth<PropType>(Component: (props: PropType) => JSX.Element) {
  return (props: ComponentProps<typeof Component> & JSX.IntrinsicAttributes) => {
    const navigate = useNavigate();
    const isUserLoggedIn = useIsUserLoggedIn();

    useEffect(() => {
      if (isUserLoggedIn) return;
      navigate("/login");
    }, [isUserLoggedIn, navigate]);

    return <Component {...props} />;
  };
}

export default withAuth;
