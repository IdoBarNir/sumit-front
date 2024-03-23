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
  console.log("left queue");
};

export const joinQueue = (email: string) => {
  socket.emit("joinQueue", email);
  console.log("joined queue");
};

export const requestQuestion = () => {
  socket.emit("requestQuestion");
  console.log("question requested");
};

export const submitAnswer = (data: { questionId: string; answer: string }) => {
  socket.emit("submitAnswer", data);
  console.log("answer submitted: ", data.answer);
};

export const onReceiveQuestion = (
  callback: (receivedQuestion: QuestionType) => void
) => {
  socket.on("receiveQuestion", callback);
  console.log("question received");
};

export const onGameResult = (callback: (result: string) => void) => {
  socket.on("gameResult", callback);
  console.log("game result received");
};

export const onDisconnect = (callback: () => void) => {
  socket.on("disconnect", callback);
  console.log("disconnected");
};

export const onUpdateQueue = (callback: (updatedQueue: string[]) => void) => {
  socket.on("updateQueue", callback);
  console.log("queue updated");
};

export const turnReceiveQuestionOff = () => {
  socket.off("receiveQuestion");
  console.log("turnReceiveQuestionOff");
};

export const turnGameResultOff = () => {
  socket.off("gameResult");
  console.log("turnGameResultOff");
};

export const turnUpdateQueueOff = () => {
  socket.off("updateQueue");
  console.log("turnUpdateQueueOff");
};
