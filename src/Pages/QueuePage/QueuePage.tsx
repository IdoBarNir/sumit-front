import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, Grid } from "@mui/material";

import useQueueUpdate from "../../hooks/QueuPage/useQueuUpdate";
import useLeaveQueueBeforeUnload from "../../hooks/QueuPage/useLeaveQueueBeforeUnload";

const QueuePage: FC<{ playerEmail: string }> = ({ playerEmail }) => {
  const [queue, setQueue] = useState<string[]>([]);
  const navigate = useNavigate();

  useQueueUpdate(playerEmail, setQueue, navigate);
  useLeaveQueueBeforeUnload();

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item>
          <Typography align="center" variant="h6">
            almost there!
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h4">
            Your position in the queue
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" variant="h1" sx={{ fontSize: "25rem" }}>
            {Array.isArray(queue)
              ? queue.indexOf(playerEmail) + 1
              : "Loading..."}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default QueuePage;
