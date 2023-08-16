import { FC, useState, useEffect } from "react";
import { useBeforeUnload, useNavigate } from "react-router-dom";
import { Container, Typography, Grid, Button } from "@mui/material";

import { GamePageProps, TIME_TO_ANSWER, handleSubmit } from "./gamePageUtils";
import { QuestionType } from "../../types/common";
import {
  onGameResult,
  leaveQueue,
  turnGameResultOff,
  turnReceiveQuestionOff,
  requestQuestion,
  onReceiveQuestion,
} from "../../api/api";
import MemoizedCountdown from "../../components/QueuePage/Countdown";
import useBackButtonRedirect from "../../hooks/useBackButtonRedirect";
import Glass from "../../components/GamePage/Glass/Glass";
import Shaker from "../../components/GamePage/Shaker";
import RightPipe from "../../svg/RightPipe.svg";
import LeftPipe from "../../svg/LeftPipe.svg";

const GamePage: FC<GamePageProps> = ({ setConclusion }) => {
  const navigate = useNavigate();

  const [isShakerAHighlighted, setIsShakerAHighlighted] = useState(false);
  const [isShakerBHighlighted, setIsShakerBHighlighted] = useState(false);
  const [isShakerCHighlighted, setIsShakerCHighlighted] = useState(false);
  const [leftGlassPosition, setLeftGlassPosition] = useState(0);
  const [rightGlassPosition, setRightGlassPosition] = useState(0);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [question, setQuestion] = useState<QuestionType>({
    id: "",
    questionText: "",
    answer: "",
    isMultipleChoice: false,
  });

  useBackButtonRedirect();

  useBeforeUnload(() => {
    leaveQueue();
  });

  useEffect(() => {
    if (question.questionText) {
      const shakerStates = question.questionText.split(",");
      setIsShakerAHighlighted(shakerStates[0] !== "0");
      setIsShakerBHighlighted(shakerStates[1] !== "0");
      setIsShakerCHighlighted(shakerStates[2] !== "0");
    }
  }, [question]);

  useEffect(() => {
    const generateAnswer = () => {
      setAnswer(`${leftGlassPosition},${rightGlassPosition}`);
    };

    generateAnswer();
  }, [leftGlassPosition, rightGlassPosition]);

  useEffect(() => {
    if (question) {
      setTimeLeft(TIME_TO_ANSWER);
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            handleSubmit({ question, answer: "TIMES_UP", setError });
          }
          return prevTime ? prevTime - 1 : 0;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [question]);

  useEffect(() => {
    requestQuestion();
    onReceiveQuestion((receivedQuestion: QuestionType) => {
      setQuestion(receivedQuestion);
    });

    onGameResult((result) => {
      if (result === "WIN") {
        setConclusion("YOU WIN");
      } else if (result === "LOSE") {
        setConclusion("YOU LOSE");
      }
      navigate("/conclusion");
    });

    return () => {
      turnReceiveQuestionOff();
      turnGameResultOff();
    };
  }, [navigate, setConclusion]);

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ paddingRight: "4vh", paddingLeft: "4vh" }}
        >
          <img src={LeftPipe} />
          <img src={RightPipe} />
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <Glass
            position={leftGlassPosition}
            setPosition={setLeftGlassPosition}
            dragDirection="left"
          />

          <Glass
            position={rightGlassPosition}
            setPosition={setRightGlassPosition}
            dragDirection="right"
          />
        </Grid>
        <Grid container justifyContent="space-evenly" style={{ width: "100%" }}>
          <Shaker label="A" highlight={isShakerAHighlighted} />
          <Shaker label="B" highlight={isShakerBHighlighted} />
          <Shaker label="C" highlight={isShakerCHighlighted} />
        </Grid>

        <Grid item>
          <Button
            variant="contained"
            onClick={() => handleSubmit({ question, answer, setError })}
            style={{ height: "15vh", width: "85vw" }}
          >
            <Typography variant="h3">SHAKE IT!</Typography>
          </Button>
        </Grid>
        <Grid item>
          <MemoizedCountdown timeLeft={timeLeft} />
        </Grid>
        <Grid item>
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default GamePage;
