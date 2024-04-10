import {
  Avatar,
  Item,
  Menu,
  MenuTrigger,
  Button,
  Text,
  Key,
} from "@adobe/react-spectrum";

export const MENU_ACTIONS = {
  PROFILE: "profile",
  LOGOUT: "logout",
};

export const ProfileMenu = () => {
  const action = (key: Key) => {
    console.log("action", key);
  };

  return (
    <MenuTrigger align="end">
      <Button variant="secondary" style="fill">
        <Text>Василенко Н.А.</Text>
        <Avatar src="https://i.imgur.com/kJOwAdv.png" marginEnd="10px" />
      </Button>

      <Menu onAction={action}>
        <Item key={MENU_ACTIONS.PROFILE}>Профиль</Item>
        <Item key={MENU_ACTIONS.LOGOUT}>Выйти</Item>
      </Menu>
    </MenuTrigger>
  );
};
