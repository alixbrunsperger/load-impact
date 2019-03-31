import React from "react";
import Media from "react-media";
import _ from "lodash";
import { mediaQueries } from "../../utils/constants";
import ResultPagination from "./ResultPagination";
import ChartContent from "../chart/ChartContent";
import ResultElement from "./ResultElement";

export default ({ results, selectedResult, setSelectedResult }) => {
  const slicedResults = _.slice(results, 0, 10);
  return (
    <section className="result">
      <header>{results.length} results have been found.</header>
      <section className="result-list">
        {slicedResults.map((url, index) => (
          <section key={index} className="result-element">
            <ResultElement
              url={url}
              selectedResult={selectedResult}
              setSelectedResult={setSelectedResult}
            />
            <Media query={`(min-width: ${mediaQueries.middle})`}>
              {matches =>
                !matches && selectedResult === url && <ChartContent />
              }
            </Media>
          </section>
        ))}
      </section>
      <ResultPagination />
    </section>
  );
};
