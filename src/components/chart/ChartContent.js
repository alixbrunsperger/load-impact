import React from "react";

export default ({ selectedResult }) => (
  <article className="result-content">
    <header>Trends about this url :<br/>
    {selectedResult}</header>
    <picture>
      <img src="/images/fake-elements/chart1.jpg" alt="chart 1" />
    </picture>
    <picture>
      <img src="/images/fake-elements/chart2.jpg" alt="chart 1" />
    </picture>
    <picture>
      <img src="/images/fake-elements/chart3.jpg" alt="chart 1" />
    </picture>
    <picture>
      <img src="/images/fake-elements/chart4.jpg" alt="chart 1" />
    </picture>
  </article>
);
