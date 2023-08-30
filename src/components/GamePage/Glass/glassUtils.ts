import { MouseEvent, TouchEvent } from "react";

export type GlassProps = {
  position: { right: number; left: number };
  role: "right" | "left";
};

export const handleDragStart =
  (
    setIsDragging: (dragging: boolean) => void,
    setStartX: (x: number) => void
  ) =>
  (event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    const x = "touches" in event ? event.touches[0].clientX : event.clientX;
    setStartX(x);
  };

export const handleDragMove =
  (
    isDragging: boolean,
    startX: number,
    setPosition: (pos: number) => void,
    dragDirection: "left" | "right",
    currentPosition: number
  ) =>
  (event: MouseEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const currentX =
      "touches" in event ? event.touches[0].clientX : event.clientX;
    const distanceMoved = currentX - startX;
    const THRESHOLD = 50;

    if (dragDirection === "left") {
      if (currentPosition === 0 && distanceMoved > THRESHOLD) {
        setPosition(1);
      } else if (currentPosition === 1 && distanceMoved < -THRESHOLD) {
        setPosition(0);
      }
    } else if (dragDirection === "right") {
      if (currentPosition === 0 && distanceMoved < -THRESHOLD) {
        setPosition(1);
      } else if (currentPosition === 1 && distanceMoved > THRESHOLD) {
        setPosition(0);
      }
    }
  };

export const handleDragEnd =
  (setIsDragging: (dragging: boolean) => void) => () => {
    setIsDragging(false);
  };
