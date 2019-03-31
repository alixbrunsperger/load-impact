import React from "react";
import SearchInputBlock from "./SearchInputBlock";
import {
  getFilteredSuggestions,
  getSavedSearches
} from "../../utils/dataUtils";

export default ({
  query,
  display,
  setDisplay,
  setQuery,
  setSelectedSuggestion,
  suggestionsList
}) => {
  const suggestions = query
    ? getFilteredSuggestions(suggestionsList, query)
    : getSavedSearches(suggestionsList);

  return (
    <section className="search">
      <form autoComplete="off">
        <header className="search-header">
          <i>
            Start to type a category name (ex: layout...) and pick a category
            from the list.
          </i>
          <br />
          Please select a category to show the urls.
        </header>
        <SearchInputBlock
          query={query}
          display={display}
          setDisplay={setDisplay}
          setQuery={setQuery}
          setSelectedSuggestion={setSelectedSuggestion}
          suggestions={suggestions}
        />
      </form>
    </section>
  );
};
