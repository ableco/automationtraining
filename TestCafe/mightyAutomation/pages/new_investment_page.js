import {Selector, t} from 'testcafe';

export default class InvestmentCreatePage {
    constructor(){
        this.header = Selector('h1.u-heading');
        this.companyDropDown = Selector('label').withText('Company').nextSibling('div[id]');
        this.companyInputTxt = Selector(this.companyDropDown).find('input.InputText');
        
        this.portfolioDropDown = Selector('label').withText('Portfolio').nextSibling('div[id]');
        this.portfolioInputTxt = Selector(this.portfolioDropDown).find('input.InputText');

        this.equityButton = Selector('.TabButton').withText('Equity');

        this.seriesDropDown = Selector('label').withText('Series').nextSibling('div[id]');
        this.seriesOptions = Selector(this.seriesDropDown).find('.SelectOptions a.SelectOption-link');

        this.customSeriesName = Selector('label').withText('Custom Series Name').nextSibling('div[id]').find('input.InputText');
        this.adquisitionDate = Selector('label').withText('Acquisition date').nextSibling('div[id]').find('input.InputText');
        this.investmentAmount = Selector('label').withText('Investment amount').nextSibling('div[id]').find('input.InputText');
        this.numberOfShares = Selector('label').withText('Number of shares').nextSibling('div[id]').find('input.InputText');

        this.addHoldingBtn = Selector('button').withText('Add Holding');

        this.confirmationH1 = Selector('h1.CreatedInvestmentConfirmation-headline');
        this.confirmationBtn = Selector('button').withText('View Investment');
    }

    async createEquity(company, portfolio, series, customSeriesName, date, amount, shares){
        await t
        .click(this.companyDropDown)
        .typeText(this.companyInputTxt, company)
        .pressKey('tab')

        .click(this.portfolioDropDown)
        .typeText(this.portfolioInputTxt, portfolio)
        .pressKey('tab')

        .click(this.equityButton)
        .click(this.seriesDropDown)
        .click(this.seriesOptions.withText(series))
        .typeText(this.customSeriesName, customSeriesName)
        .typeText(this.adquisitionDate, date)
        .typeText(this.investmentAmount, amount)
        .typeText(this.numberOfShares, shares)
        .click(this.addHoldingBtn);
        
        await this.confirmationH1.exists;
    }
}