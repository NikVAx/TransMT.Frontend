import { Button } from "@adobe/react-spectrum";
import { useSidePage } from "../sidePage/sidePage.hooks";
import ShowMenu from "@spectrum-icons/workflow/ShowMenu";

export const TriggerMenuButton = () => {
  const { setIsOpen } = useSidePage();

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Button onPress={handleClick} variant="secondary" style="fill">
      <ShowMenu />
    </Button>
  );
};
