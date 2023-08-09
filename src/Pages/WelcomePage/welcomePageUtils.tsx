import { Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { ApiResponse } from "../../types/common";
import { registerEmail } from "../../api/api";

export interface WelcomePageProps {
  playerEmail: string;
  setPlayerEmail: Dispatch<SetStateAction<string>>;
}

export const handleSubmit = async ({
  navigate,
  playerEmail,
}: {
  navigate: (route: string) => void;
  playerEmail: string;
}) => {
  try {
    const response: ApiResponse = await registerEmail(playerEmail);
    if (response === "SUCCESS") {
      navigate("/queue");
    } else if (response === "ADMIN") {
      navigate("/admin");
    }
  } catch (error) {
    console.log(error);
  }
};

export const validateEmailInput = ({
  email,
  setIsEmailValid,
}: {
  email: string;
  setIsEmailValid: Dispatch<SetStateAction<boolean>>;
}) => {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const isEmailValid = emailPattern.test(email) || !email;
  setIsEmailValid(isEmailValid);
};

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
    <Typography align="center" variant="h6">
      {`enter email to play`}
    </Typography>
  );
};
