import { FC } from "react";
import { Button, Typography } from "@mui/material";

type LetsGoButtonProps = {
  onSubmit: () => void;
};

const LetsGoButton: FC<LetsGoButtonProps> = ({ onSubmit }) => {
  return (
    <Button variant="contained" onClick={() => onSubmit()}>
      <Typography variant="h4">{`Lets Go!`}</Typography>
    </Button>
  );
};

export default LetsGoButton;
