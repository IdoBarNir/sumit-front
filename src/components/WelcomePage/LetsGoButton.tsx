import { FC } from "react";
import { Button, Typography } from "@mui/material";

type LetsGoButtonProps = {
  onSubmit: () => void;
};

const LetsGoButton: FC<LetsGoButtonProps> = ({ onSubmit }) => {
  return (
    <Button
      variant="contained"
      onClick={() => onSubmit()}
      style={{ height: "100%", width: "100%" }}
    >
      <Typography variant="h4">{`Lets Go!`}</Typography>
    </Button>
  );
};

export default LetsGoButton;
