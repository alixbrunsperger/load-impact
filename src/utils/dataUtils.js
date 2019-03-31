import _ from "lodash";
require("es6-promise").polyfill();
require("isomorphic-fetch");

const BASE_URL = "/data/json.json";
const MAX_SUGGESTIONS = 5;

export const getData = () => {
  return fetch(BASE_URL).then(async function(response) {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return await response.json();
  });
};

export const getCategoriesList = data => {
  if (data) {
    const parentCategories = _.keys(data);
    return parentCategories.map(category => {
      const childrenNames = _.keys(_.get(data, [category]));

      return {
        name: category,
        children: childrenNames.map(child => ({ name: child }))
      };
    });
  }
  return [];
};

export const getFullSuggestionList = categoryList => {
  const suggestionList = categoryList
    ? categoryList.map(category =>
        category.children.map(child => ({
          displayName: `${category.name} > ${child.name}`,
          parentName: category.name,
          childName: child.name
        }))
      )
    : [];

  return _.flatMap(suggestionList);
};

export const getFilteredSuggestions = (list, query) => {
  const filteredList = _.filter(list, element =>
    element.displayName.includes(query)
  );
  const slicedList = _.slice(
    _.orderBy(filteredList, ["displayName"]),
    0,
    MAX_SUGGESTIONS
  );
  return slicedList.map(element => ({
    ...element,
    displayName: element.displayName.replace(query, `<b>${query}</b>`)
  }));
};

export const getSavedSearches = list => _.sampleSize(list, 5);
