import { FC } from "react";
import IconButton from "@mui/material/IconButton";
import ShakerSVG from "../../svg/ShakerSVG";

type ShakerProps = {
  label: string;
  highlight: boolean;
  onClick: () => void;
};

const Shaker: FC<ShakerProps> = ({ label, highlight, onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      style={{
        width: "30vw",
        height: "15vh",
        backgroundColor: highlight ? "#00FF00" : "#EE4B2B",
        position: "relative",
      }}
      color="inherit"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <ShakerSVG label={label} fill="#000000" />
      </div>
    </IconButton>
  );
};

export default Shaker;
