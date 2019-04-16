import { Selector, t} from 'testcafe'

export default class HoldingPage{
    constructor(){
        this.investmentAddedMsg = Selector('.CreatedInvestmentConfirmation-headline');
        this.viewInvestmentButton = Selector('button').child('span').withText('View Investment');
        this.investmentHeadline = Selector('.InvestmentHeadline');
        this.actionsButton = Selector('span').withText('Actions');
        this.removeActionOption = Selector('.DropdownMenu').child('li').nth(7);
        this.updateActionOption = Selector('.DropdownMenu').child('li').nth(0);
        this.removeButton = Selector('button').withAttribute('type','submit').nth(0);
        this.successMsg = Selector('.Alert-body').child('p');
        this.valuationDescription = Selector('.Table--body').child('.Table--row').nth(0).child('div').nth(1);
        this.costBasisDescription = Selector('.Table--body').child('.Table--row').nth(0).child('div').nth(2);
        this.marketValueDescription = Selector('.Table--body').child('.Table--row').nth(0).child('div').nth(3);
        this.currentValuationValue = Selector('.ChartLabels-amount');
    }

    async removeHolding (){
        
        await t
            .click(this.actionsButton)
            .click(this.removeActionOption)
            .click(this.removeButton);
    }

    async updateHolding (){
        
        await t
            .click(this.viewInvestmentButton)
            .click(this.actionsButton)
            .click(this.updateActionOption);
    }
}