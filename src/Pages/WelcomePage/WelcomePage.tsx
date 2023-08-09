import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BinaryCocktail,
  EnterEmailToPlay,
  WelcomePageProps,
  WelcomeTo,
  handleSubmit,
  validateEmailInput,
} from "./welcomePageUtils";
import { Container } from "@mui/material";
import LetsGoButton from "../../components/WelcomePage/LetsGoButton";
import EmailInput from "../../components/WelcomePage/EmailInput";

const WelcomePage: FC<WelcomePageProps> = ({ playerEmail, setPlayerEmail }) => {
  const navigate = useNavigate();

  const [isEmailValid, setIsEmailValid] = useState(true);

  useEffect(() => {
    validateEmailInput({ email: playerEmail, setIsEmailValid });
  }, [playerEmail]);

  return (
    <Container>
      <div
        style={{
          margin: "50px",
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
        }}
      >
        <WelcomeTo />
        <BinaryCocktail />
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            flexDirection: "column",
            justifyItems: "center",
          }}
        >
          <EnterEmailToPlay />
          <div
            style={{
              marginTop: "5px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <EmailInput
              isEmailValid={isEmailValid}
              email={playerEmail}
              setEmail={setPlayerEmail}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <LetsGoButton
            onSubmit={() =>
              handleSubmit({
                navigate,
                playerEmail,
              })
            }
          />
        </div>
      </div>
    </Container>
  );
};

export default WelcomePage;
