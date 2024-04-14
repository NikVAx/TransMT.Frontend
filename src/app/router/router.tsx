import { Outlet, createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/mainLayout";
import { View } from "@adobe/react-spectrum";
import { LoginPage, ProfilePage } from "@/pages";
import { AuthGuard } from "@/shared/components/authGuard/authGuard";

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
    element: (
      <MainLayout>
        <View backgroundColor="gray-50" width="100%">
          <AuthGuard>
            <Outlet/>
          </AuthGuard>
        </View>
      </MainLayout>
    ),
    children: [{ path: "/account/profile", element: <ProfilePage /> }],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
