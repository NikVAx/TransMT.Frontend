import { LoginLayout } from "@/app/layouts";
import { authStore } from "@/features/auth";
import { BaseButton } from "@/shared/components";
import { Form, TextField, View } from "@adobe/react-spectrum";
import { useState } from "react";

export const LoginPage = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

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
          onChange={(value) =>
            setCredentials((prev) => ({ ...prev, password: value }))
          }
        ></TextField>
        <BaseButton
          variant="accent"
          onPress={() => {
            authStore.signIn(credentials);
          }}
        >
          Войти
        </BaseButton>
      </Form>
    </LoginLayout>
  );
};
