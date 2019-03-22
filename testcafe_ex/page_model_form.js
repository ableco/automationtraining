import { Selector,t } from 'testcafe';

export default class PageHoldingForm {
    constructor () {
 
    this.company = Selector('.SelectCurrentSelection-controller').find('span').withText('Select a company');
    this.portfolio = Selector('.SelectCurrentSelection-controller').find('span').withText('Select a portfolio');
    this.companyName = Selector('.FormElement .InputText').withAttribute('placeholder', 'Company');
    this.portfolioName = Selector('.FormElement .InputText').withAttribute('placeholder', 'Portfolio');
    this.btnTabEquity = Selector('.TabButton .TabButton-holder').withText('Equity');
    this.series = Selector('.SelectCurrentSelection .SelectCurrentSelection-controller').withText('Select series for this holding...');
    this.seriesName = Selector('.SelectOptions').find('li').withText('Common Stock');
    this.investmentAmount = Selector('.InputHolder .InputText').withAttribute('name', 'total_acquisition_amount');
    this.numberOfShares = Selector('.InputHolder .InputTextput').withAttribute('name', 'quantity');
    this.btnTabLlc = Selector('.TabButton .TabButton-holder').withText('LLC');
    this.radioButtonPercentage = Selector('.RadioGroupItem .RadioButton').withAttribute('value', 'percentage');
    this.percentageLlc = Selector('.InputHolder .InputText').withAttribute('name','percentage_owned');
    this.btnAddHolding = Selector('.btn .Button-holder').withText('Add Holding');
    this.confirmationModal = Selector('.CreatedInvestmentConfirmation-headline');
    this.viewInvestmentButton = Selector('.btn .Button-holder').withText('View Investment');

}
    async createHoldingEquity() {
        await t
        .click(this.company)
        .typeText(this.companyName, 'temp company')
        .pressKey('enter')
        .click(this.portfolio)
        .typeText(this.portfolioName, 'temp portfolio')
        .pressKey('enter')
        .click(this.btnTabEquity)
        .click(this.series)
        .click(this.seriesName)
        .typeText(this.investmentAmount, '400')
        .typeText(this.numberOfShares, '50')
        .click(this.btnAddHolding)
        .expect(this.confirmationModal.innerText).contains('Investment Added!')
        .click(this.viewInvestmentButton);
    } 
    async createHoldingLlc() {
        await t
        .click(this.company)
        .typeText(this.companyName, 'temp company 2')
        .pressKey('enter')
        .click(this.portfolio)
        .typeText(this.portfolioName, 'temp portfolio 2')
        .pressKey('enter')
        .click(this.btnTabLlc)
        .typeText(this.investmentAmount, '3000')
        .click(this.radioButtonPercentage)
        .typeText(this.percentageLlc,'5')
        .click(this.btnAddHolding)
        .expect(this.confirmationModal.innerText).contains('Investment Added!')
        .click(this.viewInvestmentButton);
    } 
}