import { Selector, t } from 'testcafe';

export default class UpdateEquity {
    constructor () {
        this.investmentActionBtn = Selector('.InvestmentActionsDropdown')
        this.updateHolding = Selector('.DropdownMenuItem-anchor').withText('Update Valuation')
        this.description = Selector('.Table--row .ValuationRow--description .EditRow').nth(1)
        this.pricePerShare = Selector('.FormElement--textInput').withAttribute('name', 'FormElement--price_per_unit').nth(1)
        this.saveBtn = Selector('.Button--primary').withText('Save Changes')
    }

    async updateEquity() {
        await t
            .click(this.investmentActionBtn)
            .click(this.updateHolding)
            .typeText(this.description, 'Valuation1')
            .typeText(this.pricePerShare, '4000')
            .click(this.saveBtn)

    }
}
