import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";

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

  const [isEmailValid, setIsEmailValid] = useState(true);

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
        <Grid item style={{ width: "85vw", height: "20vh", padding: 0 }}>
          <LetsGoButton
            onSubmit={() =>
              handleSubmit({
                navigate,
                playerEmail,
                onCompletion,
              })
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default WelcomePage;
