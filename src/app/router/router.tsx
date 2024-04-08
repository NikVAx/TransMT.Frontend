import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layouts";
import { View } from "@adobe/react-spectrum";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <View backgroundColor="gray-50">
        </View>
      </Layout>
    ),
  },
]);
