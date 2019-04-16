import { Selector, t} from 'testcafe'

export default class LandingPage{
    constructor(){
        this.newInvestButton = Selector('button').child('span').withText('Add New...');
        this.newHoldingOption = Selector('.DropdownMenu').child('li').nth(1);
    }

    async clickHolding (){
        await t
            .click(this.newInvestButton)
            .click(this.newHoldingOption);
    }
}