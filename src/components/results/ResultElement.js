import React from "react";
import Media from "react-media";
import { mediaQueries } from "../../utils/constants";

export default ({ selectedResult, setSelectedResult, url }) => (
  <div
    className={`result-link ${selectedResult === url ? "selected" : ""}`}
    onClick={() => setSelectedResult(url !== selectedResult ? url : "")}
  >
    <div>{url}</div>
    <Media query={`(min-width: ${mediaQueries.middle})`}>
      {matches =>
        !matches && (
          <picture>
            <img
              alt="chevron"
              src={`/images/chevron-${
                selectedResult === url ? "up" : "down"
              }.png`}
            />
          </picture>
        )
      }
    </Media>
  </div>
);
