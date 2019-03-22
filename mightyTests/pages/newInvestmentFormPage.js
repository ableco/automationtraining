import { Selector, t } from 'testcafe'

export default class Page {
    constructor(){
        this.companyDropdown = Selector('.FormElement--company').find('.Combobox')
        this.portfolioDropdown = Selector('.FormElement--portfolio').find('.Combobox')
        this.typeInvestment = Selector('.TabButtonGroup')
        this.btnAddHolding = Selector('.Button--primary')
        
        //Common fields
        this.holdingInvstAmount = Selector('.FormElement').withAttribute('name','FormElement--total_acquisition_amount')
        this.holdingDate = Selector('.FormElement').withAttribute('name', 'FormElement--date')

        //Equity fields
        this.seriesNameDropdown = Selector('.FormElement').withAttribute('name','FormElement--')
        this.seriesName = Selector('.SelectOption-link').withExactText('Series Seed')
        this.seriesDate = this.holdingDate
        this.seriesInvstAmount = this.holdingInvstAmount
        this.seriesShares = Selector('.FormElement').withAttribute('name','FormElement--quantity')
       
        //LLC fields
        this.llcName = Selector('.FormElement').withAttribute('name','FormElement--name')
        this.llcInvstAmount = this.holdingInvstAmount
        this.llcDate = this.holdingDate

        //Modal
        this.btnViewHolding = Selector('.Button-holder').withExactText('View Investment')
    }

    async selectGeneralInformation(holding) {
        await t
        .click(this.companyDropdown)
        .typeText(this.companyDropdown.find('input'), holding.company)
        .pressKey('enter')
        .click(this.portfolioDropdown)
        .typeText(this.portfolioDropdown.find('input'), holding.portfolio)
        .pressKey('enter')
    }

    async equityData(equity) {
        await t
        .click(this.typeInvestment.find('button').withExactText('Equity'))
        .click(this.seriesNameDropdown)
        .click(this.seriesName)
        .click(this.seriesDate)  
        .typeText(this.seriesDate, equity.date,{ replace: true} )
        .typeText(this.seriesInvstAmount.find('input'), equity.invstAmount)
        .typeText(this.seriesShares, equity.shares)
        .click(this.btnAddHolding)
        .click(this.btnViewHolding)
    }

    async llcData(llc) {
        await t
        .click(this.typeInvestment.find('button').withExactText('LLC'))
        .expect(this.llcName).ok()
        .click(this.llcDate)
        .typeText(this.llcDate,llc.date , { replace: true })
        .typeText(this.llcInvstAmount.find('input'), llc.invstAmount )
        .click(this.btnAddHolding)
        .click(this.btnViewHolding)
    }
}

