import { useStore } from "@/app/rootStore";
import { PageWrapper } from "@/shared/components/pageWrapper/pageWrapper";
import { Flex, Item, ListView, Text } from "@adobe/react-spectrum";

export const ProfilePage = () => {
  const authStore = useStore((store) => store.authStore);

  return (
    <PageWrapper>
      <Flex direction="column" gap="8px">
        <Text>USERNAME: {authStore.getUser().username}</Text>
        <Text>EMAIL: {authStore.getUser().email}</Text>
        <Text>ROLES</Text>
        <ListView aria-label="roles">
          {authStore.getUser().roles.map((value) => {
            return <Item key={`${value.id}`}>{value.name}</Item>;
          })}
        </ListView>
        <Text>PERMISSIONS</Text>
        <ListView aria-label="permissions">
          {authStore.permissions.map((value) => {
            return <Item key={`${value}`}>{value}</Item>;
          })}
        </ListView>
      </Flex>
    </PageWrapper>
  );
};
