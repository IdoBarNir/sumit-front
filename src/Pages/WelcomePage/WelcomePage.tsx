import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress, Container, Grid } from "@mui/material";

import {
  WelcomePageProps,
  handleSubmit,
  validateEmailInput,
} from "./welcomePageUtils";
import LetsGoButton from "../../components/WelcomePage/LetsGoButton";
import EmailInput from "../../components/WelcomePage/EmailInput";
import {
  BinaryCocktail,
  EnterEmailToPlay,
  WelcomeTo,
} from "../../components/WelcomePage/Typographies";

const WelcomePage: FC<WelcomePageProps> = ({
  playerEmail,
  setPlayerEmail,
  onCompletion,
}) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);

  useEffect(() => {
    validateEmailInput({ email: playerEmail, setIsEmailValid });
  }, [playerEmail]);

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
        style={{ height: "100vh", width: "100vw" }}
      >
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <WelcomeTo />
          <BinaryCocktail />
        </Grid>
        <Grid
          container
          direction="column"
          justifyContent="space-evenly"
          alignItems="center"
          style={{ padding: "5vw" }}
        >
          <EnterEmailToPlay />

          <EmailInput
            isEmailValid={isEmailValid}
            email={playerEmail}
            setEmail={setPlayerEmail}
          />
        </Grid>
        {!isLoading ? (
          <Grid item style={{ width: "85vw", height: "20vh", padding: 0 }}>
            <LetsGoButton
              disabled={!isEmailValid}
              onSubmit={() => {
                setIsLoading(true);
                handleSubmit({
                  navigate,
                  playerEmail,
                  onCompletion,
                });
              }}
            />
          </Grid>
        ) : (
          <CircularProgress style={{ margin: 40 }} />
        )}
      </Grid>
    </Container>
  );
};

export default WelcomePage;
