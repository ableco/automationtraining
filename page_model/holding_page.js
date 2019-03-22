import { Selector, t } from 'testcafe'

export default class Page {
    constructor () { 
        this.newInvestmentButton = Selector('.NewInvestment .btn')

        //New holding form
        this.companyDropdown = Selector('.SelectCurrentSelection-controller').find('span').withText('Select a company')
        this.companyInput = Selector('.FormElement--textInput .InputText')
        this.companySelected = Selector('.CompanySelectorItem').find('span')

        this.portfolioDropdown = Selector('.SelectCurrentSelection-controller').find('span').withText('Select a portfolio')
        this.portfolioInput = Selector('.FormElement--textInput .InputText')
        this.portfolioSelected = Selector('.SelectOption .SelectOption-link')

        this.equityOption = Selector('.TabButton-holder').withText('Equity')
        this.llcOption = Selector('.TabButton-holder').withText('LLC')

        this.seriesDropdown = Selector('.SelectCurrentSelection-controller').find('span').withText('Select series for this holding...')
        this.seriesOption = Selector('.SelectOptions .SelectOption .SelectOption-link')
        this.aquisitionDate = Selector('.FormElement .InputText').withAttribute('name', 'date')
        this.investmentAmount = Selector('.FormElement .InputText').withAttribute('name', 'total_acquisition_amount')
        this.numberShares = Selector('.FormElement .InputText').withAttribute('name', 'quantity')
        this.addHoldingButton = Selector('.btn').find('span').withText('Add Holding')
        this.confirmationModal = Selector('.ModalBody .CreatedInvestmentConfirmation-headline')
        this.viewInvestmentButton = Selector('.btn').find('span').withText('View Investment')

        //Delete holding
        this.actionsMenu = Selector('.btn').find('span').withText('Actions')
        this.deleteOption = Selector('.DropdownMenu').find('li').withText('Delete Holding')
        this.deleteModal = Selector('.ModalContent')
        this.removeButton = Selector('.ModalFooter-actionButtons .btn').withText('Remove')

    }

    async goToHoldingForm() {
        await t.click(this.newInvestmentButton);
    }

    async selectCompanyAndPortfolio(companyName, portfolioName) {
        await t 
        .click(this.companyDropdown)
        .typeText(this.companyInput, companyName)
        .click(Selector(this.companySelected).withText(companyName))

        .click(this.portfolioDropdown)
        .typeText(this.portfolioInput, portfolioName)
        .click(Selector(this.portfolioSelected).withText(portfolioName));
    }

    async createEquityHolding(holding) {
        this.goToHoldingForm();
        this.selectCompanyAndPortfolio(holding.companyName, holding.portfolioName);

        await t
        .click(this.equityOption)
        .click(this.seriesDropdown)
        .click(Selector(this.seriesOption).withText(holding.series))
        .typeText(this.aquisitionDate, holding.date, { replace: true})
        .typeText(this.investmentAmount, holding.amount)
        .typeText(this.numberShares, holding.shares)
        .click(this.addHoldingButton);
    }

    async createLlcHolding(holding) {
        this.goToHoldingForm();
        this.selectCompanyAndPortfolio(holding.companyName, holding.portfolioName);

        await t
            .click(this.llcOption)
            .typeText(this.aquisitionDate, holding.date, { replace: true})
            .typeText(this.investmentAmount, holding.amount)
            .click(this.addHoldingButton);
    }

    async goToHoldingPageFromViewInvestmentModal() {
        await t    
            .click(this.viewInvestmentButton)
    }

    async deleteHolding() {
        await t    
            .click(this.actionsMenu)
            .click(this.deleteOption)
            .click(this.removeButton); 
    }
}