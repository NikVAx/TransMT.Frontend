import { useStore } from "@/app/rootStore";
import { BaseButton } from "@/shared/components";
import {
  Avatar,
  Item,
  Menu,
  MenuTrigger,
  Text,
  Key,
} from "@adobe/react-spectrum";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

export const MENU_ACTIONS = {
  PROFILE: "profile",
  LOGOUT: "logout",
};

export const ProfileMenu = observer(() => {
  const authStore = useStore((store) => store.authStore);
  const navigate = useNavigate();

  const action = (key: Key) => {
    console.log("action", key);

    if (key == MENU_ACTIONS.LOGOUT) {
      authStore.logout();
      navigate("/login");
    } else if (key == MENU_ACTIONS.PROFILE) {
      navigate("/account/profile");
    }
  };

  return (
    <MenuTrigger align="end">
      <BaseButton variant="secondary" style="fill">
        <Text>
          {" "}
          {authStore.isAuthenticated()
            ? authStore.getUser().username
            : "NOT_AUTHORIZED"}{" "}
        </Text>
        <Avatar src="https://i.imgur.com/kJOwAdv.png" marginEnd="10px" />
      </BaseButton>

      <Menu onAction={action}>
        <Item key={MENU_ACTIONS.PROFILE}>Профиль</Item>
        <Item key={MENU_ACTIONS.LOGOUT}>Выйти</Item>
      </Menu>
    </MenuTrigger>
  );
});
