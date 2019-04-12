import { Selector , t } from 'testcafe';

export default class  createInvesmentPageModel {
    constructor () {
        this.company = Selector('span').withText('Select a company')
        this.selectedTextInput= Selector('.SelectCurrentSelection')
        this.optionCompany = Selector ('.SelectOption-link').nth(0)
        this.optionPortafolio = Selector ('.SelectOption.is-selected').nth(1);
        this.portfolio = Selector('span').withText('Select a portfolio')
        this.portfolioTextInput = Selector('.InputText').withAttribute('placeholder', 'Portfolio')
        this.type = Selector('span').withText('Equity')
        this.series = Selector ('span').withText('Select series for this holding...')
        this.optionSeries = Selector ('.SelectOption-link').withText('Common Stock')
        this.amount = Selector ('.InputText').withAttribute ('placeholder', '0.0000')
        this.shares = Selector ('.InputText').withAttribute ('name', 'quantity')
        this.newHoldingButton = Selector('span').withText('Add Holding')
        this.successMessage = Selector('h1').withText('Investment Added!')
        this.viewInvesment = Selector('.Button-holder').withText('View Investment').parent(0);
    }     

    async createNewInvesment ()
    {
        await t 
        .click (this.company)
        .typeText (this.selectedTextInput, 'Test')
        .click (this.optionCompany)
        .click (this.portfolio)
        .typeText (this.portfolioTextInput, 'Test')
        .click (this.optionPortafolio)
        .click (this.type)
        .click (this.series)
        .click (this.optionSeries)
        .typeText (this.amount, '100')
        .typeText (this.shares, '2')
        .click (this.newHoldingButton)
        .wait(200)
        .expect (this.successMessage.visible).ok()
           
    }

}
