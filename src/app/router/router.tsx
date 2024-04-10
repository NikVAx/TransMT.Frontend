import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/mainLayout";
import { View } from "@adobe/react-spectrum";
import { LoginPage } from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <View backgroundColor="gray-50"></View>
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (<LoginPage/>),
  },
]);
