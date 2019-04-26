import { Selector, t } from "testcafe";

import Dropdown from "../commons/dropdown";
import Equity from "./equity";

const modal = Selector(".FullScreenModalWrapper");

export default class NewHolding {
  constructor() {
    this.title = modal.find("h1.u-heading");
    this.company = new Dropdown(modal.find('div[name="FormElement--company"]'));
    this.portfolio = new Dropdown(
      modal.find('div[name="FormElement--portfolio"]'),
    );

    this.holdingList = modal.find(".TabButtonGroup button");
    //Holding details
    this.newEquity = new Equity();

    //Footer
    this.addholdingButton = Selector(".FullScreenModalFooter button").withText(
      "Add Holding",
    );
    this.cancelButton = Selector(".FullScreenModalFooter button").withText(
      "Cancel",
    );
  }

  async selectCompanyPortfolio(company, portfolio) {
    await this.company.selectOption(company);
    await this.portfolio.selectOption(portfolio);
  }

  async addNewEquityWithMandatoryFields(
    type,
    amount,
    series,
    name,
    acquisitionDate,
    price,
    sharesNumber,
  ) {
    await t.click(this.holdingList.withExactText(type), {
      visibilityCheck: true,
    });

    await t
      .click(this.newEquity.amountInput)
      .typeText(this.newEquity.amountInput, amount);

    await this.newEquity.seriesDropdown.selectOption(series);

    await t.typeText(this.newEquity.customNameInput, name);

    await t
      .selectText(this.newEquity.acquisitionDateInput)
      .pressKey("delete")
      .typeText(this.newEquity.acquisitionDateInput, acquisitionDate);

    await this.newEquity.salesPriceSelect.selectOption(price);

    await t.typeText(this.newEquity.sharesNumberInput, sharesNumber);

    await t.click(this.addholdingButton);
  }
}
