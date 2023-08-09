import { io } from "socket.io-client";
import { BACKEND_URL } from "../../api/api";
import { FC } from "react";
import { Typography } from "@mui/material";

export interface QueuePageProps {
  playerEmail: string;
}

export const socket = io(BACKEND_URL);

export const YourPositionInTheQueue: FC = () => {
  return (
    <Typography align="center" variant="h5">
      {`your position in the queue:`}
    </Typography>
  );
};
