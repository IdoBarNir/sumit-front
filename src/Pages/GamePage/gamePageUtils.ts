import { Dispatch, SetStateAction } from "react";
import { QuestionType } from "../../types/common";
import { leaveQueue, submitAnswer } from "../../api/api";

export interface GamePageProps {
  setConclusion: Dispatch<SetStateAction<string>>;
}

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
    leaveQueue();
  } else {
    setError("No question received. Please wait or retry.");
  }
};
