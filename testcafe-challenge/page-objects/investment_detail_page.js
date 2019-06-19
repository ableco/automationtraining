import {Selector, t } from 'testcafe';

export default class InvestmentDtlPage {
    constructor(){
this.buttonActions = Selector('.Button-holder').withText('Actions');
this.updateValuationLink = Selector('.u-dropdownLink').withText('Update Valuation');
this.descriptionBox = Selector('.Table--newEntry .ValuationRow--description .InputText').withAttribute('placeholder', 'Add description...');
this.priceBox = Selector('.Table--newEntry .ValuationRow--price .InputText').withAttribute('name','price_per_unit');
this.buttonUpdateVal = Selector('.Button-holder').withText('Save Changes');
this.historyDescription = Selector('.ValuationRow--description .PreviewRow').nth(0);
this.historyPricePerShare = Selector('.ValuationRow--price .perShareValue .u-smallBoldDark').nth(0);
this.historyMarketVal = Selector('.ValuationRow--value .PreviewRow .u-smallBoldDark').nth(0);
this.deleteHoldingLink = Selector('.u-dropdownLink').withText('Delete Holding');
this.deleteModalTitle = Selector('.ModalHeader-title').withText('Are you sure?');
this.buttonRemove = Selector('.Button-holder').withText('Remove');
this.flashMessage = Selector('.Alert-body');
    }
async updateval(data){
    await t 
    .click(this.buttonActions)
    .click(this.updateValuationLink)
    .typeText(this.descriptionBox,data.text)
    .typeText(this.priceBox,data.price)
    .click(this.buttonUpdateVal)
}
}


