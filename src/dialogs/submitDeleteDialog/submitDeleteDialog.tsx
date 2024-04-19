import { BaseButton } from "@/components";
import {
  ButtonGroup,
  Content,
  Dialog,
  Divider,
  Heading,
} from "@adobe/react-spectrum";

export const SubmitDeleteDialog = ({ close, count, onSubmit }: any) => {
  const onSubmitPress = (e: any) => {
    onSubmit(e);
    close(e);
  };

  return (
    <Dialog>
      <Heading>Удалить {count} записей?</Heading>
      <Divider />
      <Content>Вы уверены, что хотите удалить выбранные элементы?</Content>
      <ButtonGroup>
        <BaseButton variant="secondary" onPress={close} autoFocus>
          Отмена
        </BaseButton>
        <BaseButton variant="negative" style="fill" onPress={onSubmitPress}>
          Подтвердить
        </BaseButton>
      </ButtonGroup>
    </Dialog>
  );
};
