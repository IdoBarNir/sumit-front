import { Dispatch, SetStateAction } from "react";

import { toggleGameStatus } from "../../api/api";

export const handleToggle = async ({
  setGameEnabled,
}: {
  setGameEnabled: Dispatch<SetStateAction<boolean>>;
}) => {
  try {
    const data = await toggleGameStatus();
    if (data.success) {
      setGameEnabled((prevState) => !prevState);
    } else {
      console.error("Failed to update game status.");
    }
  } catch (error) {
    console.error("Failed to update game status:", (error as Error).message);
  }
};
