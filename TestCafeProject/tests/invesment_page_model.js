import { Selector , t } from 'testcafe';

export default class  invesmentPageModel {
    constructor () {
        this.actionButton = Selector('span').withText('Actions').parent(0)
        this.deleteOption = Selector('a').withText('Delete Holding')
        this.remove = Selector('.Button-holder').withText('Remove').parent(0)
        this.falshText = Selector('.Alert-body')
        this.updateOption = Selector('a').withText('Update Valuation')
        this.valuationDescription = Selector ('.ValuationModal').find('.InputText').withAttribute('placeholder', 'Add description...')
        // this.valuationDescription = Selector('.ValuationModal').find('div.FormElement.FormElement--textInput.small').child('.InputText')
        this.valuationPrice = Selector('.ValuationModal').find('.InputText').withAttribute('placeholder', '0.0000')
        this.submit = Selector('span.Button-holder').withText('Save Changes').parent(0)
        this.ValuationSavedDescription = Selector ('.PreviewRow.u-textWithEllipsis').nth(1);
    }     

    async deleteInvesment ()
    {
        await t 
        .click (this.actionButton)
        .click (this.deleteOption)
        .click (this.remove)
        .wait (5000)
        .expect (this.falshText.visible).ok();
        
    }

    async updateValuation ()
    {
        await t 
        .click (this.actionButton)
        .click (this.updateOption)
        //.expect (this.valuationDescription.visible).ok()
        .typeText (this.valuationDescription, 'Valuation 1')
        .typeText (this.valuationPrice, '5')
        .click (this.submit)
        .wait (300)
        .expect (this.ValuationSavedDescription.visible).ok()
        .expect(this.ValuationSavedDescription.textContent).contains ('Valuation 1');
        // console.log (this.valuationDescription);
    
    }

}
