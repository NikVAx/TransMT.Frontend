import { useMainLayout } from "../../context/mainLayout.hooks";
import ShowMenu from "@spectrum-icons/workflow/ShowMenu";
import { BaseButton } from "@/shared/components";

export const TriggerMenuButton = () => {
  const { setIsSidebarOpen } = useMainLayout();

  const handleClick = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <BaseButton onPress={handleClick} variant="secondary" style="fill">
      <ShowMenu />
    </BaseButton>
  );
};
