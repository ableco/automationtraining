import { Selector, t } from 'testcafe';

export default class DeleteEquity {
    constructor () {
        this.investmentActionBtn = Selector('.InvestmentActionsDropdown')
        this.deleteHolding = Selector('.DropdownMenuItem-anchor').withText('Delete Holding')
        this.remove = Selector('.Button--primary')
        this.message = Selector('.Flash-body')
    }

    async deleteEquity() {
        await t
            .click(this.investmentActionBtn)
            .click(this.deleteHolding)
            .click(this.remove)
            .expect(this.message.innerText).contains('Holding successfully deleted')

    }
}
