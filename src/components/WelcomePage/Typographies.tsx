import { FC } from "react";

import { Typography } from "@mui/material";

export const WelcomeTo: FC = () => {
  return (
    <Typography align="center" variant="h5">
      {`welcome to`}
    </Typography>
  );
};

export const BinaryCocktail: FC = () => {
  return (
    <Typography align="center" variant="h3">
      {`Binary Cocktail`}
    </Typography>
  );
};

export const EnterEmailToPlay: FC = () => {
  return (
    <Typography align="center" variant="h6" style={{ margin: "3vw" }}>
      {`enter email to play:`}
    </Typography>
  );
};
