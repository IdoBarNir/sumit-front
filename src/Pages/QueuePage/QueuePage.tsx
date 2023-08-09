import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  QueuePageProps,
  YourPositionInTheQueue,
  socket,
} from "./queuePageUtils";
import { Container, Typography } from "@mui/material";

const QueuePage: FC<QueuePageProps> = ({ playerEmail }) => {
  const [queue, setQueue] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    socket.on("updateQueue", (updatedQueue: string[]) => {
      setQueue(updatedQueue);

      if (updatedQueue[0] === playerEmail) {
        navigate("/game");
      }
    });

    socket.emit("joinQueue", "player's email");

    return () => {
      socket.off("updateQueue");
    };
  }, [navigate, playerEmail]);

  return (
    // <div>
    //   <h1>Your position in the queue: {queue.indexOf(playerEmail) + 1}</h1>
    // </div>

    <Container>
      <div
        style={{
          margin: "50px",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        <YourPositionInTheQueue />
        <div
          style={{
            margin: "50px",
          }}
        >
          <Typography align="center" variant="h1">
            {queue.indexOf(playerEmail) + 1}
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default QueuePage;
