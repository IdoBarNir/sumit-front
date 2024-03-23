import { FC, useState, useEffect } from "react";
import { useBeforeUnload, useNavigate } from "react-router-dom";

import {
  Container,
  Typography,
  Grid,
  Button,
  CircularProgress,
} from "@mui/material";

import {
  GamePageProps,
  HighlightedShakers,
  TIME_TO_ANSWER,
  generateAnswer,
  handleSubmit,
} from "./gamePageUtils";
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
import RightPipe from "../../svg/RightPipe.svg";
import LeftPipe from "../../svg/LeftPipe.svg";
import Glass from "../../components/GamePage/Glass/Glass";
import Shaker from "../../components/GamePage/Shaker";

const GamePage: FC<GamePageProps> = ({ setConclusion, setIsWin }) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [glassPositions, setGlassPositions] = useState({
    left: 0,
    right: 0,
  });
  const [highlightedShakers, setHighlightedShakers] =
    useState<HighlightedShakers>({
      A: false,
      B: false,
      C: false,
    });
  const [question, setQuestion] = useState<QuestionType>({
    id: "",
    questionText: "",
    answer: "",
    isMultipleChoice: false,
  });

  useBackButtonRedirect();

  useBeforeUnload(() => {
    console.log("useBeforeUnload");

    leaveQueue();
  });

  useEffect(() => {
    if (question.questionText) {
      const [leftPos, rightPos] = question.questionText.split(",");
      setGlassPositions({
        left: Number(leftPos),
        right: Number(rightPos),
      });
    }
  }, [question]);

  useEffect(() => {
    if (question) {
      setTimeLeft(TIME_TO_ANSWER);
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime === 1) {
            handleSubmit({
              question,
              answer: generateAnswer(highlightedShakers),
              setError,
            });
          }
          return prevTime ? prevTime - 1 : 0;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [highlightedShakers, question]);

  useEffect(() => {
    requestQuestion();
    onReceiveQuestion((receivedQuestion: QuestionType) => {
      setQuestion(receivedQuestion);
    });

    onGameResult((result) => {
      console.log("game result received: ", result);
      if (result === "WIN") {
        setConclusion("Bravo! You Win!");
        setIsWin(true);
      } else if (result === "LOSE") {
        setConclusion("Try Again...");
      }
      navigate("/conclusion");
    });

    return () => {
      turnReceiveQuestionOff();
      turnGameResultOff();
    };
  }, [navigate, setConclusion, setIsWin]);

  const handleShakerClick = (shakerLabel: keyof HighlightedShakers) => {
    setHighlightedShakers((prevShakers) => {
      const updatedShakers = {
        ...prevShakers,
        [shakerLabel]: !prevShakers[shakerLabel],
      };
      return updatedShakers;
    });
  };

  return (
    <Container>
      <Grid
        container
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{ height: "100vh" }}
      >
        <Grid item>
          <MemoizedCountdown timeLeft={timeLeft} />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          style={{ paddingRight: "3vh", paddingLeft: "3vh" }}
        >
          <img src={LeftPipe} alt="Left Pipe" />
          <img src={RightPipe} alt="Right Pipe" />
        </Grid>
        <Grid container style={{ display: "flex", width: "90%" }}>
          <Glass role="left" position={glassPositions} />
          <Glass role="right" position={glassPositions} />
        </Grid>
        <Typography variant="h6">Fill without spilling</Typography>
        <Grid container justifyContent="space-evenly" style={{ width: "100%" }}>
          <Shaker
            label="A"
            highlight={highlightedShakers.A}
            onClick={() => handleShakerClick("A")}
          />
          <Shaker
            label="B"
            highlight={highlightedShakers.B}
            onClick={() => handleShakerClick("B")}
          />
          <Shaker
            label="C"
            highlight={highlightedShakers.C}
            onClick={() => handleShakerClick("C")}
          />
        </Grid>

        {!isLoading ? (
          <Grid item>
            <Button
              variant="contained"
              onClick={() => {
                setIsLoading(true);
                handleSubmit({
                  question,
                  answer: generateAnswer(highlightedShakers),
                  setError,
                });
              }}
              style={{ height: "15vh", width: "85vw", marginBottom: 100 }}
            >
              <Typography variant="h3">Go!</Typography>
            </Button>
          </Grid>
        ) : (
          <CircularProgress style={{ margin: 40 }} />
        )}
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
