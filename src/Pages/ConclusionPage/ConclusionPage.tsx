import { FC, useRef } from "react";
import { Grid } from "@mui/material";

import {
  ConclusionPageProps,
  ConclusionWrapper,
  FullHeightContainer,
} from "./conclusionPageUtils";
import useBackButtonRedirect from "../../hooks/useBackButtonRedirect";
import Fireworks, { FireworksHandlers } from "@fireworks-js/react";
import { leaveQueue } from "../../api/api";

const ConclusionPage: FC<ConclusionPageProps> = ({
  conclusion,
  isWin = false,
}) => {
  useBackButtonRedirect();
  const fireworksRef = useRef<FireworksHandlers>(null);

  leaveQueue();

  return (
    <FullHeightContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <ConclusionWrapper variant="h1">{conclusion}</ConclusionWrapper>
        </Grid>
      </Grid>
      {isWin && (
        <Fireworks
          ref={fireworksRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 0,
          }}
        />
      )}
    </FullHeightContainer>
  );
};

export default ConclusionPage;
