import { LoginLayout } from "@/app/layouts";
import { useStore } from "@/app/rootStore";
import { BaseButton } from "@/components";
import { Form, TextField, View } from "@adobe/react-spectrum";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = observer(() => {
  const authStore = useStore((store) => store.authStore);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (authStore.isAuthenticated()) {
      navigate("/");
    }
  }, [authStore.isAuthenticated()]);

  return (
    <LoginLayout>
      <View backgroundColor="blue-600"></View>
      <Form
        gridArea="form"
        maxWidth="size-3600"
        justifySelf="center"
        marginTop="240px"
      >
        <TextField
          label="Имя пользователя"
          onChange={(value) =>
            setCredentials((prev) => ({ ...prev, username: value }))
          }
        />
        <TextField
          label="Пароль"
          type="password"
          onChange={(value) =>
            setCredentials((prev) => ({ ...prev, password: value }))
          }
        />
        <BaseButton
          variant="accent"
          onPress={() => {
            authStore.login(credentials);
          }}
        >
          Войти
        </BaseButton>
      </Form>
    </LoginLayout>
  );
});
