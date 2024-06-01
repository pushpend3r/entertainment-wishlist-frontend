import { ComponentProps } from "react";
import { MemoryRouter, MemoryRouterProps } from "react-router-dom";

function withMemoryRouter<PropType>(
  Component: (props: PropType) => JSX.Element,
  initialEntries: MemoryRouterProps["initialEntries"] = ["/"]
) {
  return (props: ComponentProps<typeof Component> & JSX.IntrinsicAttributes) => {
    return (
      <MemoryRouter initialEntries={initialEntries}>
        <Component {...props} />
      </MemoryRouter>
    );
  };
}

export default withMemoryRouter;
