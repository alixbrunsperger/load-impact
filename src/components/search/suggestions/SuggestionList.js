import React from "react";

export default ({ suggestions, setSelectedSuggestion }) =>
  suggestions.map((suggestion, index) => (
    <div
      key={index}
      className="suggestion"
      onClick={() => setSelectedSuggestion(suggestion)}
      dangerouslySetInnerHTML={{
        __html: suggestion.displayName
      }}
    />
  ));
