import { MainLayout } from "@/app/layouts";
import { View } from "@adobe/react-spectrum";
import { AuthGuard } from "../authGuard";
import { Outlet } from "react-router-dom";

export const AppOutletContainer = () => {
  return (
    <MainLayout>
      <View backgroundColor="gray-50" width="100%">
        <AuthGuard>
          <Outlet />
        </AuthGuard>
      </View>
    </MainLayout>
  );
};
