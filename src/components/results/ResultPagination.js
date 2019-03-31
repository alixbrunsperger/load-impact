import React from "react";
import Media from "react-media";
import { mediaQueries } from "../../utils/constants";

export default () => (
  <footer className="pagination">
    <Media query={`(min-width: ${mediaQueries.middle})`}>
      {matches =>
        matches ? (
          <div className="pagination-numbers"> 1 2 3 .... 99 100 </div>
        ) : (
          <button className="pagination-button">See more results</button>
        )
      }
    </Media>
  </footer>
);
