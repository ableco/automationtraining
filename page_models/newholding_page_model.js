import { Selector, t } from 'testcafe';

export default class NewholdingPageModel {
  constructor() {
    this.newholdingTitle = Selector(".u-heading");
    this.companyDropdown = Selector(".Select-currentSelectionText").withText('Select a company');
    this.companyText = Selector(".InputText").withAttribute("placeholder", "Company")
    this.portfolioDropdown = Selector(".Select-currentSelectionText").withText('Select a portfolio');
    this.portfolioText = Selector(".InputText").withAttribute("placeholder", "Portfolio")
    this.equityButton = Selector(".TabButton").withText("Equity");
    this.seriesText = Selector(".SelectCurrentSelection-controller .Select-currentSelectionText").withText("Select series for this holding...");
    this.seriesDropdown = Selector(".SelectOptions .SelectOption .SelectOption-link");
    this.customeSeriesName = Selector(".InputHolder .InputText").withAttribute("label","Custom Series Name");
    this.acquisitionDate = Selector(".InputHolder .InputText").withAttribute("label", "Acquisition date");
    this.investmentAmount = Selector(".InputHolder .InputText").withAttribute("name", "total_acquisition_amount");
    this.shareDropdown = Selector(".SelectCurrentSelection-controller .Select-currentSelectionText").withText("Per share");
    this.seriesSelection = Selector(this.shareDropdown).find(".SelectOptions a.SelectOption-link")
    this.numberOfShares = Selector(".InputHolder .InputText").withAttribute("name", "quantity");
    this.addHoldingButton = Selector(".Button-holder").withText("Add Holding");
    this.confirmationModalTitle = Selector(".CreatedInvestmentConfirmation-headline");
    this.viewInvestmentButton = Selector(".Button-holder").withText("View Investment");
  }

  async createNewHoldingWithMandatoryFields(holdingContent) {
    await t
      .click(this.companyDropdown)
      .typeText(this.companyText, holdingContent.company)
      .pressKey("enter")
      .click(this.portfolioDropdown)
      .typeText(this.portfolioText, holdingContent.portfolio)
      .pressKey("enter")
      .click(this.equityButton)
      .click(this.seriesText)
      .click(this.seriesDropdown.withText(holdingContent.series))
      .typeText(this.customeSeriesName, holdingContent.customseries)
      .typeText(this.acquisitionDate, holdingContent.date)
      .typeText(this.investmentAmount, holdingContent.amount)
      .typeText(this.numberOfShares, holdingContent.shares)
      .click(this.addHoldingButton)
  }
}