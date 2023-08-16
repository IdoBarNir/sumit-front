import { MouseEvent, TouchEvent, useState } from "react";
import {
  handleDragStart as startDrag,
  handleDragMove as moveDrag,
  handleDragEnd as endDrag,
} from "../../components/GamePage/Glass/glassUtils";

export const useDrag = (
  initialPosition: number,
  dragDirection: "left" | "right"
) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [newPosition, setNewPosition] = useState(initialPosition);

  const handleDragStart = startDrag(setIsDragging, setStartX);

  const handleDragMove = (
    event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>,
    currentPosition: number
  ) => {
    moveDrag(
      isDragging,
      startX,
      setNewPosition,
      dragDirection,
      currentPosition
    )(event);
  };

  const handleDragEnd = endDrag(setIsDragging);

  return {
    newPosition,
    isDragging,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  };
};
