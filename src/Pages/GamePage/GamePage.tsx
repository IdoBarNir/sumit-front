import { FC, useState } from "react";

import { checkAnswer } from "../../api/api";
import { ApiResponse } from "../../types/common";
import { useNavigate } from "react-router-dom";
import { GamePageProps } from "./gamePageUtils";

const GamePage: FC<GamePageProps> = ({ setConclusion }) => {
  const navigate = useNavigate();

  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    try {
      const response: ApiResponse = await checkAnswer(answer);
      if (response === "RIGHT") {
        setConclusion("win");
        navigate("/conclusion");
      } else if (response === "WRONG") {
        setConclusion("lose");
        navigate("/conclusion");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div>
      <p>What is 5 + 5?</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{error}</p>
    </div>
  );
};

export default GamePage;
