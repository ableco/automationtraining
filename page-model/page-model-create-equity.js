import { Selector } from 'testcafe';

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
}
