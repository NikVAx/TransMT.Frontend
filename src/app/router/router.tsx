import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/mainLayout";
import { View } from "@adobe/react-spectrum";
import { LoginPage, ProfilePage } from "@/pages";
import { AuthGuard } from "@/shared/components/authGuard/authGuard";
import { AppOutletContainer } from "@/shared/components/appOutletContainer";
import { BuildingCreatePage } from "@/pages/entities/buildings";

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
      { path: "/entities/buildings/create", element: <BuildingCreatePage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
