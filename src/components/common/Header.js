import React from "react";
import Media from "react-media";
import { mediaQueries } from "../../utils/constants";

export default () => (
  <header className="main-header">
    <section className="title">
      LOAD
      <br />
      Impact
    </section>
    <section className="menu">
      <Media query={`(min-width: ${mediaQueries.middle})`}>
        {matches =>
          matches ? (
            <nav>Menu</nav>
          ) : (
            <picture>
              <img src="/images/menu.png" alt="menu icon" />
            </picture>
          )
        }
      </Media>
    </section>
  </header>
);
