import {Selector, t } from 'testcafe';

export default class NewInvestmentPage {
    constructor(){
this.companyDropdown = Selector('.SelectCurrentSelection-controller').find('span').withText('Select a company');
this.inputCompany= Selector('.InputHolder .InputText').withAttribute('placeholder', 'Company');
this.portfolioDropdown = Selector('.SelectCurrentSelection-controller').find('span').withText('Select a portfolio');
this.inputPortfolio= Selector('.InputHolder .InputText').withAttribute('placeholder', 'Portfolio');
this.btnEquity = Selector('.TabButton .TabButton-holder').withText('Equity');
//Equity Holding details
this.series = Selector('.SelectCurrentSelection-controller .Select-currentSelectionText').withText('Select series for this holding...');
this.seriesDropdown = Selector('.SelectOptions .SelectOption .SelectOption-link');
this.customseriesName = Selector('.InputHolder .InputText').withAttribute('label', 'Custom Series Name');
this.acqDate = Selector('.InputHolder .InputText').withAttribute('label', 'Acquisition date');
this.invAmount= Selector('.InputHolder .InputText').withAttribute('name','total_acquisition_amount');
this.shareDropdown = Selector('.SelectCurrentSelection-controller .Select-currentSelectionText' ).find('span').withText('Per share');
this.seriesSelection = Selector(this.shareDropdown).find('.SelectOptions a.SelectOption-link');
this.noOfShares = Selector('.InputHolder .InputText').withAttribute('name','quantity');
this.commonStock = Selector('RadioGroupItem-Common');
this.preferredStock = Selector('#RadioGroupItem-Preferred');
this.buttonAddHolding = Selector('.Button-holder').withText('Add Holding');
this.modal = Selector('.CreatedInvestmentConfirmation-headline');
this.buttonViewInv = Selector('.Button-holder').withText('View Investment');

}
async createEquityInv (data){
    await t
    //company
    .click(this.companyDropdown)
    .typeText(this.inputCompany, data.company)
    .pressKey('enter')
    //portfolio
    .click(this.portfolioDropdown)
    .typeText(this.inputPortfolio, data.portfolio)
    .pressKey('enter')
    //fill additional fields 
    .click(this.btnEquity)
    .click(this.series)
    .click(this.seriesDropdown.withText(data.series))
    .typeText(this.customseriesName,data.customseries)
    .typeText(this.acqDate,data.date)
    .typeText(this.invAmount,data.amount)
    // .click(this.shareDropdown)
    // .click(this.seriesSelection.withText(data.selectinv))
    .typeText(this.noOfShares,data.shares)
    .click(this.preferredStock)
    //submit the form 
    .click(this.buttonAddHolding);
}
}

