import { Selector, t} from 'testcafe'

export default class InvestmentPage{
    constructor(){
        this.companyDropDown = Selector('.SelectCurrentSelection').nth(0);
        this.companyInput = Selector('.InputText').withAttribute('placeholder','Company');
        this.companyOptions = Selector('.SelectOptions').nth(0).child('li');
        this.portfolioDropDown = Selector('.SelectCurrentSelection').nth(1);
        this.portfolioInput = Selector('.InputText').withAttribute('placeholder','Portfolio');
        this.portfolioOptions = Selector('.SelectOptions').nth(1).child('li');
        this.equityTab = Selector('.TabButton-holder').withText('Equity');
        this.seriesDropDown = Selector('.SelectCurrentSelection').nth(2);
        this.seriesOptions = Selector('.SelectOptions').nth(2).child('li').nth(1);
        this.acquisitionDateInput = Selector('div').withAttribute('name','FormElement--date');
        this.investmentAmountInput = Selector('input').withAttribute('name','total_acquisition_amount');
        this.quantityInput = Selector('input').withAttribute('name','quantity');
        this.addHoldingButton = Selector('button').child('span').withText('Add Holding');
    }

    async createHolding (company, portfolio,investmentAmount,quantity){
        
        await t
            .click(this.companyDropDown)
            .typeText(this.companyInput,company)
            .click(this.companyOptions)
            .click(this.portfolioDropDown)
            .typeText(this.portfolioInput,portfolio)
            .click(this.portfolioOptions)
            .click(this.equityTab)
            .click(this.seriesDropDown)
            .click(this.seriesOptions)
            .click(this.investmentAmountInput)
            .typeText(this.investmentAmountInput,investmentAmount)
            .hover(this.quantityInput)
            .click(this.quantityInput)
            .typeText(this.quantityInput,quantity)
            .click(this.addHoldingButton);
    }
}