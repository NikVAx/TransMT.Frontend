import { Grid } from "@adobe/react-spectrum";
import { PropsWithChildren, useMemo } from "react";
import { MainLayoutContext } from "./context/mainLayout.context";
import { MainLayoutProvider } from "./context/mainLayout.provider";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export const MainLayout = ({ children }: PropsWithChildren) => {
  const memoChildren = useMemo(() => {
    return children;
  }, [children]);

  return (
    <MainLayoutProvider>
      <MainLayoutContext.Consumer>
        {({ isOpen }) => (
          <Grid
            areas={["header  header", "sidebar content"]}
            columns={[isOpen ? "280px" : "0px", "3fr"]}
            rows={["60px", "auto"]}
            height="100dvh"
          >
            <Sidebar />
            <Header />
            {memoChildren}
          </Grid>
        )}
      </MainLayoutContext.Consumer>
    </MainLayoutProvider>
  );
};
