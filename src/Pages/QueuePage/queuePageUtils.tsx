import { FC } from "react";
import { Typography } from "@mui/material";

export type QueuePageProps = {
  playerEmail: string;
};

export const YourPositionInTheQueue: FC = () => {
  return (
    <Typography align="center" variant="h5">
      {`your position in the queue:`}
    </Typography>
  );
};
