import { Selector, t } from 'testcafe';

export default class CreateEquity {
    constructor () {
        this.company = Selector('.FormElement').find('.Combobox').withText('Select a company')
        this.companyValue = Selector('.SelectPopup').find('.SelectOption')
        this.portfolio = Selector('.FormElement').find('.Combobox').withText('Select a portfolio')
        this.portfolioValue = Selector('.SelectPopup').find('.SelectOption')
        this.investementType = Selector('.TabButton-holder').withText('Equity')
        this.series = Selector('.FormElement').withText('Select series for this holding...')
        this.seriesValue = Selector('.SelectPopup').find('.SelectOption')
        this.investmentAmount = Selector('.InputHolder .InputText').withAttribute('name', 'total_acquisition_amount')
        this.sharesNumber = Selector('.InputHolder .InputText').withAttribute('name', 'quantity')
        this.addHoldingBtn = Selector('.Button--primary').withText('Add Holding')
        this.investmentModal = Selector('.CreatedInvestmentConfirmation')
        this.viewInvestment = Selector('.btn .Button-holder').withText('View Investment')
        this.investmentDetail = Selector('.InvestmentView-sidebar .u-sectionHeading')
    }


    async createEquity() {
        await t 
            .click(this.company)
            .click(this.companyValue.withText('15Five'))
            .click(this.portfolio)
            .click(this.companyValue.withText('Actions Portfolio'))
            .click(this.investementType)
            .click(this.series)
            .click(this.seriesValue.withText('Common Stock'))
            .typeText(this.investmentAmount, '1000')
            .typeText(this.sharesNumber, '5')
            .click(this.addHoldingBtn)
            .expect(this.investmentModal.innerText).contains('Investment Added!')
            .click(this.viewInvestment)
            .expect(this.investmentDetail.innerText).contains('Holding Summary');
    }
}

