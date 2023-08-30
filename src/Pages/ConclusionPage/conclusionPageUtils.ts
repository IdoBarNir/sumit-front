import { Container, Typography, styled } from "@mui/material";

export type ConclusionPageProps = {
  conclusion: string;
  isWin: boolean;
};

export const ConclusionWrapper = styled(Typography)({
  wordWrap: "break-word",
  overflowWrap: "break-word",
  textAlign: "center",
});

export const FullHeightContainer = styled(Container)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
