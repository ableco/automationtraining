import { Selector, t } from 'testcafe';

export default class  landingPageModel {
    constructor () {
        this.header = Selector('h3').withText('Organization Holdings')
        this.newInvesment = Selector ('.Button-holder')
        this.newHolding = Selector('a').withText('New Holding');
    }
    async clickOnNewInvesmentOption (){
        await t 
            .click(this.newInvesment)
            .click (this.newHolding);
    }

}

