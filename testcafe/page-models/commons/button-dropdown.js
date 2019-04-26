import { t } from "testcafe";

export default class ButtonDropdown {
  constructor(selector) {
    this.button = selector.find("button");
    this.linkList = selector.find("ul.DropdownMenu a");
  }

  async selectOption(option) {
    await t
      .click(this.button, { visibilityCheck: true })
      .click(this.linkList.withExactText(option), { visibilityCheck: true });
  }
}
