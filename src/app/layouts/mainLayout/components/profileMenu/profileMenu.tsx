import { authStore } from "@/features/auth";
import {
  Avatar,
  Item,
  Menu,
  MenuTrigger,
  Button,
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
  const navigate = useNavigate();

  const action = (key: Key) => {
    console.log("action", key);

    if (key == MENU_ACTIONS.LOGOUT) {
      authStore.signOut();
      navigate("/login");
    }
  };

  return (
    <MenuTrigger align="end">
      <Button variant="secondary" style="fill">
        <Text>
          {" "}
          {authStore.isAuthenticated()
            ? authStore.getUser().username
            : "NOT_AUTHORIZED"}{" "}
        </Text>
        <Avatar src="https://i.imgur.com/kJOwAdv.png" marginEnd="10px" />
      </Button>

      <Menu onAction={action}>
        <Item key={MENU_ACTIONS.PROFILE}>Профиль</Item>
        <Item key={MENU_ACTIONS.LOGOUT}>Выйти</Item>
      </Menu>
    </MenuTrigger>
  );
});
