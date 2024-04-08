import { Grid } from "@adobe/react-spectrum";
import { PropsWithChildren, useMemo } from "react";
import { SidePageContext } from "./sidePage/sidePage.context";
import { SidePageProvider } from "./sidePage/sidePage.provider";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

export const Layout = ({ children }: PropsWithChildren) => {
  const memoChildren = useMemo(() => {
    return children;
  }, [children]);

  return (
    <SidePageProvider>
      <SidePageContext.Consumer>
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
      </SidePageContext.Consumer>
    </SidePageProvider>
  );
};
