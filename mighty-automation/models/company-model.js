import { Selector, t } from 'testcafe';

const holdingList = Selector('.CompanyProfileTable-body').find('.ProfileTableRowDetail.is-expanded')

class Holding {
  constructor (holdingName) {
    this.holdingName = holdingList.find('a').withText(holdingName)
  }
}

export default class companyPage {
  constructor () {
    this.myHoldings     = Selector('.NavigationTabs.NavigationTabs--horizontal').find('div').withText('My Holdings')
    this.portfolioList  = Selector('.CompanyProfileTable-body').find('.ProfileTable-row')
    this.holdingList    = holdingList
    this.flashMessage   = Selector('.Flash-closeButton').parent(1)
  }

  async goToMyHolding () {
    await t
      .click(this.myHoldings)
  }
  async goToPortfolio (portfolioName) {
    await t 
      .click(this.portfolioList.find('a').withText(portfolioName))
  }
  async displayListOfHoldings (portfolioName) {
    await t
      .click(this.portfolioList.find('a').withText(portfolioName).parent(0).sibling('svg'))
  }
  async selectHolding (holdingName){
    const holding = new Holding(holdingName)
    await t
      .click(holding.holdingName)
  }
}
