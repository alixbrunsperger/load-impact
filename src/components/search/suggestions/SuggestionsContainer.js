import React from "react";
import SuggestionList from "./SuggestionList";

export default ({ display, setQuery, setSelectedSuggestion, suggestions }) => (
  <section className="suggestion-container">
    {display && (
      <section className="suggestion-list">
        <div
          className="suggestion close"
          onClick={() => setSelectedSuggestion()}
        >
          <div>Close the list</div>
          <picture>
            <img
              className="close-icon"
              src="/images/cross.png"
              alt="close icon"
              onClick={setQuery}
            />
          </picture>
        </div>
        <SuggestionList
          suggestions={suggestions}
          setSelectedSuggestion={setSelectedSuggestion}
        />
        {suggestions.length === 0 && (
          <div className="suggestion">No suggestions found.</div>
        )}
      </section>
    )}
  </section>
);
