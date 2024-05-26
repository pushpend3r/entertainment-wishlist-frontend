import { ComponentProps, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useIsUserLoggedIn from "../hooks/useIsUserLoggedIn";
import { ROUTES } from "../enums/routes";

function withAuth<PropType>(Component: (props: PropType) => JSX.Element) {
  return (props: ComponentProps<typeof Component> & JSX.IntrinsicAttributes) => {
    const navigate = useNavigate();
    const isUserLoggedIn = useIsUserLoggedIn();

    useEffect(() => {
      if (isUserLoggedIn) return;
      navigate(ROUTES.LOGIN_PAGE);
    }, [isUserLoggedIn, navigate]);

    return <Component {...props} />;
  };
}

export default withAuth;
