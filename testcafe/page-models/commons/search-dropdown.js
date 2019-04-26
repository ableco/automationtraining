import { t } from "testcafe";

class SearchResults {
  constructor(selector, type) {
    this.title = selector
      .find(".SearchBoxResultGroup .SearchBoxResultGroup-title")
      .withText(type);
    this.optionList = selector
      .find(".SearchBoxResultGroup .SearchBoxResultGroup-title")
      .nextSibling("div")
      .find("a");
  }
}

export default class SearchDropdown {
  constructor(selector) {
    this.textInput = selector.find("input");
    this.clearButton = selector.find("button");
    this.searchResults = selector.find(".SearchBoxResults");
  }

  async selectOption(option, type) {
    await t
      .click(this.textInput, { visibilityCheck: true })
      .typeText(this.textInput, option);

    const results = new SearchResults(this.searchResults, type);

    await t.click(results.optionList.withText(option), {
      visibilityCheck: true,
    });
  }
}
