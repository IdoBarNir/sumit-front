import { io } from "socket.io-client";
import { QuestionType } from "../types/common";

export const BACKEND_URL = "https://sumit-back.onrender.com";
export const socket = io(BACKEND_URL);

export const registerEmail = async (email: string) => {
  const response = await fetch(`${BACKEND_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  return response.json();
};

export const getGameStatus = async () => {
  const response = await fetch(`${BACKEND_URL}/gameStatus`);
  return response.json();
};

export const toggleGameStatus = async () => {
  const response = await fetch(`${BACKEND_URL}/toggleGameStatus`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data;
};

export const leaveQueue = () => {
  socket.emit("leaveQueue");
};

export const joinQueue = (email: string) => {
  socket.emit("joinQueue", email);
};

export const requestQuestion = () => {
  socket.emit("requestQuestion");
};

export const submitAnswer = (data: { questionId: string; answer: string }) => {
  socket.emit("submitAnswer", data);
};

export const onReceiveQuestion = (
  callback: (receivedQuestion: QuestionType) => void
) => {
  socket.on("receiveQuestion", callback);
};

export const onGameResult = (callback: (result: string) => void) => {
  socket.on("gameResult", callback);
  console.log("game result received");
  leaveQueue();
};

export const onDisconnect = (callback: () => void) => {
  socket.on("disconnect", callback);
};

export const onUpdateQueue = (callback: (updatedQueue: string[]) => void) => {
  socket.on("updateQueue", callback);
};

export const turnReceiveQuestionOff = () => {
  socket.off("receiveQuestion");
};

export const turnGameResultOff = () => {
  socket.off("gameResult");
};

export const turnUpdateQueueOff = () => {
  socket.off("updateQueue");
};
