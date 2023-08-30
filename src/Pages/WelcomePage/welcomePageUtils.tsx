import { Dispatch, SetStateAction } from "react";

import { ApiResponse } from "../../types/common";
import { registerEmail } from "../../api/api";

export type WelcomePageProps = {
  playerEmail: string;
  setPlayerEmail: Dispatch<SetStateAction<string>>;
  onCompletion: () => void;
};

export const handleSubmit = async ({
  navigate,
  onCompletion,
  playerEmail,
}: {
  navigate: (route: string) => void;
  onCompletion: () => void;
  playerEmail: string;
}) => {
  try {
    const response: ApiResponse = await registerEmail(playerEmail);

    if (response.status === "SUCCESS") {
      onCompletion();
      navigate("/queue");
    } else if (response.status === "ADMIN") {
      onCompletion();
      navigate("/admin");
    } else if (response.status === "GAME_DISABLED") {
      alert("The game is disabled now");
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
  const isEmailValid = emailPattern.test(email);
  setIsEmailValid(isEmailValid);
};
