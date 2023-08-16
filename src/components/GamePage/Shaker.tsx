import { FC } from "react";
import ShakerSVG from "../../svg/ShakerSVG";

interface ShakerProps {
  label: string;
  highlight: boolean;
}

const Shaker: FC<ShakerProps> = ({ label, highlight }) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "30vw",
        height: "15vh",
      }}
    >
      <ShakerSVG label={label} fill={highlight ? "#00FF00" : "#000000"} />
    </div>
  );
};

export default Shaker;
