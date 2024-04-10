import { Grid } from "@adobe/react-spectrum";
import { PropsWithChildren } from "react";

export const LoginLayout = ({ children }: PropsWithChildren) => {
  return (
    <Grid areas={["image form"]} columns={["3fr", "900px"]} height="100dvh">
      {children}
    </Grid>
  );
};
