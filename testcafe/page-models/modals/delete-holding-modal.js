import { Selector } from "testcafe";

const modal = Selector("div.ModalContent");

export default class DeleteHoldingModal {
  constructor() {
    this.closeButton = modal.find("span.ModalCloseButton");
    this.info = modal.find(".ModalBody--dialog");

    this.removeButton = modal
      .find("div.ModalContent div.ModalFooter span")
      .withText("Remove")
      .parent(0);
    this.cancelButton = modal
      .find("div.ModalContent div.ModalFooter span")
      .withText("Cancel")
      .parent(0);
  }
}
