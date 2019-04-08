import { Selector, t } from 'testcafe';


export default class navigationPage {
  constructor () {
    this.toCompanies            = Selector('ul.menu').find('span').withText('Companies')
    this.toPortfolio            = Selector('ul.menu').find('span').withText('Portfolios')
    this.createInvestmentButton = Selector('button').find('span.Button-text').withText('New Investment')
  }

  async goToNewInvestment () {
    await t 
      .click(this.createInvestmentButton)
  }
  async goToCompanies () {
    await t
      .click(this.toCompanies)
  }
  async goToPortfolios () {
    await t
      .click(this.toPortfolio)
  }
}
