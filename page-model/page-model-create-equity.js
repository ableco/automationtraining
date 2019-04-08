import { Selector } from 'testcafe';

export default class CreateEquity {
    constructor () {
        this.company = Selector('.FormElement').find('.Combobox').withText('Select a company')
        this.companyValue = Selector('.SelectPopup').find('.SelectOption')
        this.portfolio = Selector('.FormElement').find('.Combobox').withText('Select a portfolio')
        this.portfolioValue = Selector('.SelectPopup').find('.SelectOption')
        this.investementType = Selector('.TabButton-holder').withText('Equity')
    }
}
