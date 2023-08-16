import { useState, useEffect, FC } from "react";
import { Typography, Container, Grid, Switch } from "@mui/material";

import { getGameStatus } from "../../api/api";
import { handleToggle } from "./adminPageUtils";

const AdminPage: FC = () => {
  const [isGameEnabled, setGameEnabled] = useState<boolean>(false);

  useEffect(() => {
    const fetchGameStatus = async () => {
      try {
        const data = await getGameStatus();
        setGameEnabled(data.isEnabled);
      } catch (error) {
        console.error("Failed to fetch game status:", (error as Error).message);
      }
    };

    fetchGameStatus();
  }, []);

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={12}>
          <Typography variant="h5" align="center" gutterBottom>
            Admin Dashboard
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Game Status:</Typography>
        </Grid>

        <Grid item xs={12}>
          <Switch
            checked={isGameEnabled}
            onChange={() => handleToggle({ setGameEnabled })}
          />
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3">
            {isGameEnabled ? "Enabled" : "Disabled"}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPage;
