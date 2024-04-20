import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/mainLayout";
import { View } from "@adobe/react-spectrum";
import { AppOutletContainer, AuthGuard } from "@/components";
import {
  LoginPage,
  ProfilePage,
  RoleCreatePage,
  RolesViewPage,
  BuildingCreatePage,
  RoleEditPage,
} from "@/pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <AuthGuard>
          <View backgroundColor="gray-50" />
        </AuthGuard>
      </MainLayout>
    ),
  },
  {
    element: <AppOutletContainer />,
    children: [
      { path: "/account/profile", element: <ProfilePage /> },
      { path: "/accounts/roles", element: <RolesViewPage /> },
      { path: "/accounts/roles/create", element: <RoleCreatePage /> },
      { path: "/accounts/roles/:id/edit", element: <RoleEditPage /> },
      { path: "/entities/buildings/create", element: <BuildingCreatePage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
