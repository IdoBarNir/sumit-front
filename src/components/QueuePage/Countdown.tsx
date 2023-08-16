import { Typography } from "@mui/material";
import { FC, memo } from "react";

interface CountdownProps {
  timeLeft: number | null;
}

const Countdown: FC<CountdownProps> = ({ timeLeft }) => {
  return (
    <div>
      <Typography variant="h6">{`Time left: ${timeLeft} seconds`}</Typography>
    </div>
  );
};

const MemoizedCountdown = memo(Countdown);

export default MemoizedCountdown;
