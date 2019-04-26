import { Selector } from "testcafe";

export default class FlashMessage {
  constructor() {
    this.message = Selector("div .Flash .Alert-body");
  }
}
