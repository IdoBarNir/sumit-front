import { FC } from "react";
import { Grid } from "@mui/material";

import {
  ConclusionPageProps,
  ConclusionWrapper,
  FullHeightContainer,
} from "./conclusionPageUtils";
import useBackButtonRedirect from "../../hooks/useBackButtonRedirect";

const ConclusionPage: FC<ConclusionPageProps> = ({ conclusion }) => {
  useBackButtonRedirect();

  return (
    <FullHeightContainer>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <ConclusionWrapper variant="h1">{conclusion}</ConclusionWrapper>
        </Grid>
      </Grid>
    </FullHeightContainer>
  );
};

export default ConclusionPage;
