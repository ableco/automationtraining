import { Selector, t } from 'testcafe';

export default class newInvestmentPage {
  constructor () {
    //this.dropdownCompany    = Selector('span.Select-currentSelectionText.Select-currentSelectionText--noSelection').withText('Select a company')
    this.dropdownCompany    = Selector('.FormElement').find('.Combobox').withText('Select a company')
    this.company            = Selector('input').withAttribute('placeholder','Company')
    this.companyValue       = Selector('.SelectPopup').find('.SelectOption') 
    this.dropdownPortfolio  = Selector('span.Select-currentSelectionText.Select-currentSelectionText--noSelection').withText('Select a portfolio')
    this.portfolio          = Selector('input').withAttribute('placeholder','Portfolio')
    this.equityTypeButton   = Selector('.TabButtonGroup').find('span').withText('Equity')
    this.dropdownSeries     = Selector('span').withText('Select series for this holding...')
    this.series             = Selector('ul.SelectOptions').find('a').withText('Series Seed')
    this.investmentAmount   = Selector('input').withAttribute('name','total_acquisition_amount')
    this.sharesNumber       = Selector('input').withAttribute('name','quantity')
    this.addHoldingButton   = Selector('span').withText('Add Holding')
    this.messageResult      = Selector('h1.CreatedInvestmentConfirmation-headline')
  }

  async createNewInvestment (company,portfolio,investmentAmount,sharesNumber) {
    await t 
      .click(this.dropdownCompany)
      .click(this.companyValue.withText('Able'))
      //.typeText(this.company, company)
      //.pressKey('enter')
      .expect(this.dropdownCompany.value).eql('Able')
      .click(this.dropdownPortfolio)
      .typeText(this.portfolio, portfolio)
      .pressKey('enter')
      .click(this.equityTypeButton)
      .click(this.dropdownSeries)
      .click(this.series)
      .typeText(this.investmentAmount, investmentAmount)
      .typeText(this.sharesNumber, sharesNumber)
      .click(this.addHoldingButton)
  }
}
