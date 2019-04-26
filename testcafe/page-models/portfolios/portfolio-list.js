import { t, Selector } from "testcafe";

export default class PortfolioListPage {
  constructor() {
    this.heading = Selector(".PortfoliosView-header h1");
    this.addPortfolio = Selector(".PortfoliosView-header button");
  }
}
