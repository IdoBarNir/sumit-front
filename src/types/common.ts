export type ApiResponse = {
  status: "SUCCESS" | "WIN" | "LOSE" | "ADMIN" | "ERROR" | "GAME_DISABLED";
};

export type QuestionType = {
  id: string;
  questionText: string;
  answer: string;
  isMultipleChoice: boolean;
};
