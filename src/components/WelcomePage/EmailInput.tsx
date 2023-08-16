import { ChangeEvent, FC } from "react";
import { TextField } from "@mui/material";

type EmailInputProps = {
  isEmailValid: boolean;
  email: string;
  setEmail: (value: string) => void;
};

const EmailInput: FC<EmailInputProps> = ({ isEmailValid, email, setEmail }) => {
  return (
    <TextField
      fullWidth
      error={!isEmailValid}
      value={email}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
      }}
      required
      label={isEmailValid ? `your email address` : `email is invalid.`}
    />
  );
};

export default EmailInput;
