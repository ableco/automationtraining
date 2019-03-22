import { Selector, t } from 'testcafe'

export default class Page {
   
    constructor(){
        this.holdingName = Selector('.InvestmentDetails-masthead')
        this.actionsMenu = Selector('.Button-holder').withExactText('Actions')
         
        //Delete Holding
        this.deleteAction = Selector('.DropdownMenuItem').find('a').withExactText('Delete Holding')
        this.btnRemove = Selector('.Button--primary').find('span').withExactText('Remove')
        this.flashMessage = Selector('.Flash-body').withExactText('Holding successfully deleted')   
        this.notExistMessage = Selector('.NotFound').withExactText("The page you're looking for doesn't exist.")

        //Update Valuation
        this.valuationAction = Selector('.DropdownMenuItem').find('a').withExactText('Update Valuation')
        this.valuationModal = Selector('.ValuationModal')
        this.descriptionField = Selector('.Table--row .ValuationRow--description .EditRow .FormElement--textInput').nth(1)
        this.pricePerShare = Selector('.FormElement--numberInput').withAttribute('name', 'FormElement--price_per_unit').nth(1)
        this.btnSave = Selector('.Button--primary').find('span').withExactText('Save Changes')
        this.marketValue = Selector('.ValuationRow--value .u-smallBoldDark').nth(2)
    }

    async deleteHolding(holding) {
        await t
        .expect(this.holdingName).ok()
        .click(this.actionsMenu)
        .click(this.deleteAction)
        .click(this.btnRemove)
        .expect(this.flashMessage).ok()
    }

    async updateValuation(holding) {
        await t
        .expect(this.holdingName).ok()
        .click(this.actionsMenu)
        .click(this.valuationAction)
        .typeText(this.descriptionField, holding.valuationDescription, { replace: true })
        .click(this.pricePerShare)
        .typeText(this.pricePerShare, holding.newPricePerShare, {replace: true})
        .click(this.btnSave)
        .expect(this.marketValue.textContent).eql(holding.newMarketValue) 
    }
}