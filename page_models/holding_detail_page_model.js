import { Selector, t } from 'testcafe';

export default class HoldingDetailPageModel {
  constructor() {
    this.actionsButton = Selector(".Button-holder").withText("Actions");
    this.updateValuationLink = Selector(".u-dropdownLink").withText("Update Valuation");
    this.descriptionText = Selector(".Table--newEntry .ValuationRow--description .InputText").withAttribute("placeholder", "Add description...");
    this.priceText = Selector(".Table--newEntry .ValuationRow--price .InputText").withAttribute("name", "price_per_unit");
    this.updateValuationButton = Selector(".Button-holder").withText("Save Changes");
    this.recordDescriptionLabel = Selector(".ValuationRow--description .PreviewRow").nth(0);
    this.recordPricePerShareLabel = Selector(".ValuationRow--price .perShareValue .u-smallBoldDark").nth(0);
    this.recordMarketValueLabel = Selector(".ValuationRow--value .PreviewRow .u-smallBoldDark").nth(0);
    this.deleteHoldingLink = Selector(".u-dropdownLink").withText("Delete Holding");
    this.deleteModalTitle = Selector(".ModalHeader-title").withText("Are you sure?");
    this.removeButton = Selector(".Button-holder").withText("Remove");
    this.alertMessage = Selector(".Alert-body");
  }

  async updateValuation(valuationContent) {
    await t
      .click(this.actionsButton)
      .click(this.updateValuationLink)
      .typeText(this.descriptionText, valuationContent.text)
      .typeText(this.priceText, valuationContent.price)
      .click(this.updateValuationButton)
  }
}

