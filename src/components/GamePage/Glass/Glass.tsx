import { FC, useEffect } from "react";

import { useDrag } from "../../../hooks/GamePage/useDrag";
import CocktailGlass from "../../../svg/CocktailGlass.svg?url";
import { GlassProps } from "./glassUtils";

const Glass: FC<GlassProps> = ({ position, setPosition, dragDirection }) => {
  const {
    newPosition,
    isDragging,
    handleDragStart,
    handleDragMove,
    handleDragEnd,
  } = useDrag(position, dragDirection);

  useEffect(() => {
    setPosition(newPosition);
  }, [newPosition, setPosition]);

  return (
    <div
      onMouseDown={handleDragStart}
      onMouseMove={(event) => handleDragMove(event, position)}
      onMouseUp={handleDragEnd}
      onTouchStart={handleDragStart}
      onTouchMove={(event) => handleDragMove(event, position)}
      onTouchEnd={handleDragEnd}
      style={{
        cursor: isDragging ? "grabbing" : "grab",
        transform: `translateX(${
          position === 1 ? (dragDirection === "left" ? "60px" : "-60px") : "0px"
        })`,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <img
        src={CocktailGlass}
        alt="Cocktail Glass"
        width="100px"
        height="200px"
      />
    </div>
  );
};

export default Glass;
