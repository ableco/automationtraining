import { Selector, t } from 'testcafe'
import HoldingPage from './holding_page'

const pageHolding = new HoldingPage();

export default class Page {
    constructor() {
        this.valuationOption = Selector('.DropdownMenu').find('li').withText('Update Valuation')
        this.valuationModal = Selector('.ValuationModal')
        this.valuationDescription = Selector('.Table--newEntry .ValuationRow--description .InputText')
        this.valuationPricePerunit = Selector('.Table--newEntry .ValuationRow--price .FormElement--priceInput .InputText')
        this.saveChangesButton = Selector('.ValuationModal .btn').find('span').withText('Save Changes')
        this.valuationDescriptionTable = Selector('.Table--body .Table--row .ValuationRow--description .PreviewRow').nth(0);
        this.valuationPricePerShareTable = Selector('.Table--body .Table--row .ValuationRow--price .PreviewRow .perShareValue').child('span')
    }

    async createValuationFromModal(valuation) {
        await pageHolding.goToHoldingPageFromViewInvestmentModal();
        await t
            .click(pageHolding.actionsMenu)
            .click(this.valuationOption)
            .typeText(this.valuationDescription, valuation.description)
            .typeText(this.valuationPricePerunit, valuation.pricePerUnit)
            .click(this.saveChangesButton);

    } 
}