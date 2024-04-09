import { Button } from "@adobe/react-spectrum";
import { useMainLayout } from "../../context/mainLayout.hooks";
import ShowMenu from "@spectrum-icons/workflow/ShowMenu";

export const TriggerMenuButton = () => {
  const { setIsSidebarOpen } = useMainLayout();

  const handleClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <Button onPress={handleClick} variant="secondary" style="fill">
      <ShowMenu />
    </Button>
  );
};
