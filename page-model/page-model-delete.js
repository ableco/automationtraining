import { Selector, t } from 'testcafe';

export default class DeleteEquity {
    constructor () {
        this.investmentActionBtn = Selector('.InvestmentActionsDropdown')
    }

    async deleteEquity() {
        await t
            .click(this.investmentActionBtn)

    }
}
