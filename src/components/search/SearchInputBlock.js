import React from "react";
import SuggestionsContainer from "./suggestions/SuggestionsContainer";

export default ({
  query,
  display,
  setDisplay,
  setQuery,
  setSelectedSuggestion,
  suggestions
}) => (
  <section className="input-block">
    <picture className="visible">
    {query ? <img
        className="close-icon"
        src="/images/cross.png"
        alt="close icon"
        onClick={setQuery}
      /> : <img
      className="search-icon"
      src="/images/search.png"
      alt="search icon"
    />}
    </picture>
    <input
      type="text"
      name="query"
      className="search-input"
      value={query}
      onFocus={() => {setDisplay(true);}}
      onChange={setQuery}
    />
    <SuggestionsContainer
      display={display}
      setQuery={setQuery}
      setSelectedSuggestion={setSelectedSuggestion}
      suggestions={suggestions}
    />
  </section>
);
