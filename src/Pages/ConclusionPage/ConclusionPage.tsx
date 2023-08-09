import { FC } from "react";

import { ConclusionPageUtils } from "./conclusionPageUtils";

const ConclusionPage: FC<ConclusionPageUtils> = ({ conclusion }) => {
  return <div>{conclusion}</div>;
};

export default ConclusionPage;
