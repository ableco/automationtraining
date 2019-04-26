import { Selector } from "testcafe";

const modal = Selector("div.ModalContent");

export default class HoldingAddedModal {
  constructor() {
    this.closeButton = modal.find("span.ModalCloseButton");
    this.title = modal.find(".ModalBody h1");
    this.info = modal.find(".ModalBody p");

    this.viewInvestmentButton = modal
      .withText("View Investment")
      .parent("button");
  }
}
