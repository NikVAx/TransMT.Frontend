import { useNavigate } from "react-router-dom";
import { BaseButton } from "../baseButton";

export interface INavigateButtonProps {
  title: string;
  to: string;
}

export const NavigateButton = ({ title, to }: INavigateButtonProps) => {
  const navigate = useNavigate();

  const onPressHandler = () => {
    navigate(to);
  };

  return (
    <BaseButton variant="accent" onPress={onPressHandler}>
      {title}
    </BaseButton>
  );
};
