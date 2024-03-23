import { Dispatch, SetStateAction } from "react";
import { QuestionType } from "../../types/common";
import { submitAnswer } from "../../api/api";

export type GamePageProps = {
  setConclusion: Dispatch<SetStateAction<string>>;
  setIsWin: Dispatch<SetStateAction<boolean>>;
};

export type HighlightedShakers = {
  A: boolean;
  B: boolean;
  C: boolean;
};

export const TIME_TO_ANSWER = 100;

export const handleSubmit = ({
  question,
  answer,
  setError,
}: {
  question: QuestionType;
  answer: string;
  setError: Dispatch<SetStateAction<string>>;
}) => {
  if (question) {
    submitAnswer({
      questionId: question.id,
      answer,
    });
  } else {
    setError("No question received. Please wait or retry.");
  }
};

export const generateAnswer = (highlightedCount: number) => {
  return highlightedCount.toString();
};
