import { Selector,t } from 'testcafe';
export default class PageHoldingDetails {
    constructor () {
        this.btnActions = Selector('.btn .Button-holder').withText('Actions');
        this.deleteOption = Selector('.DropdownMenu .DropdownMenuItem').withText('Delete Holding');
        this.deleteConfirmModal = Selector('.ModalHeader-inner .ModalHeader-title');
        this.btnRemove = Selector('.btn .Button-holder').withText('Remove');
        this.updateValuationOption = Selector('.DropdownMenu .DropdownMenuItem').withText('Update Valuation');
        this.updateValuationModal = Selector('.ValuationModal');
        this.pricePerUnit = Selector('.Table--newEntry .Table--row-item .EditRow .FormElement .InputHolder .InputText').withAttribute('name', 'price_per_unit');     
        this.pricePerUnitValue = '70.0000';
        this.perShareValue = Selector('.perShareValue .u-smallBoldDark').nth(0);
        this.saveChangesUpdateValuation = Selector('.btn .Button-holder').withText('Save Changes');
        this.flashMessageDelete = Selector('.Flash-body');
    }

    async deleteHolding() {
        await t
        .click(this.btnActions)
        .hover(this.deleteOption)
        .click(this.deleteOption)
        .expect(this.deleteConfirmModal.innerText).contains('Are you sure?')
        .click(this.btnRemove)
        .expect(this.flashMessageDelete.innerText).contains('Holding successfully deleted');
    }

    async updateValuationEquityActions() {
        await t
        .click(this.btnActions)
        .hover(this.updateValuationOption)
        .click(this.updateValuationOption)
        .expect(this.updateValuationModal.innerText).contains('Update Valuation')
        .typeText(this.pricePerUnit, this.pricePerUnitValue)
        .click(this.saveChangesUpdateValuation)
        .expect(this.perShareValue.textContent).contains(this.pricePerUnitValue);
    }
}