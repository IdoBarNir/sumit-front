export const BACKEND_URL = "http://localhost:3001";

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

export const checkAnswer = async (answer: string) => {
  const response = await fetch(`${BACKEND_URL}/game/answer`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ answer }),
  });
  return response.json();
};
