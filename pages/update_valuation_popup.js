import { Selector, t} from 'testcafe'

export default class UpdateValuationPopup{
    constructor(){
        this.descriptionInput = Selector('input').withAttribute('placeholder','Add description...').nth(1);
        this.pricePerShareInput = Selector('input').withAttribute('name','price_per_unit').nth(1);
        this.saveChangesBtn = Selector('button').child('span').withText('Save Changes');
        this.preicePerShareValue = Selector('.perShareValue');
    }

    async updateValuation (description, pricePerhare){
        
        await t
            .typeText(this.descriptionInput,description)
            .typeText(this.pricePerShareInput,pricePerhare)
            .click(this.saveChangesBtn)
            .wait(3000);
    }
}