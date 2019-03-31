import React, { Component, Fragment } from "react";
import _ from "lodash";
import Media from "react-media";
import Header from "./components/common/Header";
import SearchContainer from "./components/search/SearchContainer";
import {
  getData,
  getCategoriesList,
  getFullSuggestionList
} from "./utils/dataUtils";
import { mediaQueries } from "./utils/constants";
import "./styles/style.scss";
import ResultsContainer from "./components/results/ResultsContainer";
import ChartContent from "./components/chart/ChartContent";

class App extends Component {
  state = {
    categoryList: [],
    data: {},
    display: false,
    query: "",
    results: [],
    selectedResult: "",
    selectedSuggestion: null,
    suggestionsList: []
  };
  componentDidMount = async () => {
    const data = await getData();
    const categoryList = getCategoriesList(data);
    this.setState({
      data,
      categoryList,
      suggestionsList: getFullSuggestionList(categoryList)
    });
  };

  setDisplay = display => this.setState({ display });

  setQuery = e => {
    const { results } = this.state;
    const query = e.target.value ? e.target.value.toLowerCase() : "";
    this.setState({ query, results: query ? results : [] });
  };

  setSelectedResult = selectedResult => this.setState({ selectedResult });

  setSelectedSuggestion = suggestion => {
    const { data } = this.state;
    this.setState({ display: false });
    if (suggestion) {
      const { childName, parentName } = suggestion;
      const results = _.get(data, `${parentName}.${childName}`);
      this.setState({
        selectedResult: null,
        selectedSuggestion: suggestion,
        results,
        query: `${parentName} > ${childName}`
      });
    } else {
      this.setState({ query: "", selectedResult: null });
    }
  };
  render() {
    const {
      display,
      query,
      results,
      selectedResult,
      suggestionsList
    } = this.state;

    return (
      <Fragment>
        <Header />
        <section role="main">
          <SearchContainer
            query={query}
            setQuery={this.setQuery}
            setDisplay={this.setDisplay}
            setSelectedSuggestion={this.setSelectedSuggestion}
            display={display}
            suggestionsList={suggestionsList}
          />
          {results.length > 0 && (
            <ResultsContainer
              results={results}
              selectedResult={selectedResult}
              setSelectedResult={this.setSelectedResult}
            />
          )}
          <Media query={`(min-width: ${mediaQueries.middle})`}>
            {matches =>
              matches && results.length > 0 && selectedResult ? (
                <section className="content">
                  <ChartContent selectedResult={selectedResult} />
                </section>
              ) : null
            }
          </Media>
        </section>
        <footer />
      </Fragment>
    );
  }
}

export default App;
