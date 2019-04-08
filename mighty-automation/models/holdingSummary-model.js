import { Selector, t} from 'testcafe';

export default class holdingSummaryPage{
  constructor () {
    this.actionsButton          = Selector('button').find('span').withText('Actions')
    this.updateValuationButton  = Selector('ul.DropdownMenu').find('a').withText('Update Valuation')
    this.holdingDescription     = Selector('div.Table--row.Table--newEntry').find('input').withAttribute('type','text')
    this.pricePerShareValue     = Selector('div.Table--row.Table--newEntry').find('input').withAttribute('name','price_per_unit')
    this.saveChangesButton      = Selector('button.Button--primary')
    this.deleteHoldingAction    = Selector('ul.DropdownMenu').find('a').withText('Delete Holding')
    this.removeHoldingButton    = Selector('button').find('span').withText('Remove')
  }

  async deleteHolding () {
    await t 
    .click(this.actionsButton)
    .click(this.deleteHoldingAction)
    .click(this.removeHoldingButton)
  }
  async updateValuation (description,pricePerShare) {
    await t
      .click(this.actionsButton)
      .click(this.updateValuationButton)
      .typeText(this.holdingDescription, description)
      .typeText(this.pricePerShareValue, pricePerShare)
      .click(this.saveChangesButton)
  }
}
