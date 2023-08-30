import { FC } from "react";
import CocktailGlass from "../../../svg/CocktailGlass.svg?url";
import { GlassProps } from "./glassUtils";

const Glass: FC<GlassProps> = ({ role, position }) => {
  const isVisible =
    (role === "left" && position.left === 1) ||
    (role === "right" && position.right === 1);

  const containerStyle: React.CSSProperties = {
    flex: 1,
    display: isVisible ? "flex" : "none",
    justifyContent: role === "left" ? "flex-start" : "flex-end",
  };

  return (
    <div style={containerStyle}>
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
