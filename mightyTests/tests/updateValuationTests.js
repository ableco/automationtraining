import dashboardPage from '../pages/dashboardPage'
import newInvestmentFormPage from '../pages/newInvestmentFormPage'
import newInvestmentPage from '../pages/newInvestmentPage'
import * as roles from '../helper/roleMighty'

const dashboard_page = new dashboardPage()
const newInvestmentForm_page = new newInvestmentFormPage()
const newInvestment_page = new newInvestmentPage()

fixture ('Update valuation').page('https://mighty-client-qa-stable.herokuapp.com/investments/2b20eca25a74950a9fd33409526891d7')
    .beforeEach( async t => {
        await t
        .maximizeWindow()
        .useRole(roles.regularUser)
    })
    .afterEach( async t => {
        await newInvestment_page.deleteHolding({})
    })

test('Update valuation of an equity', async t => {
    await t
    .click(dashboard_page.btnNewInvestment)

    await newInvestmentForm_page.selectGeneralInformation({
        company: 'Able',
        portfolio: 'SNP Portfolio'
    })

    await newInvestmentForm_page.equityData({
        date: '10/05/2013',
        invstAmount: '1500',
        shares: '80'
    })

    await newInvestment_page.updateValuation({
        valuationDescription: 'Valuation 1',
        newPricePerShare: '25',
        newMarketValue: '$2,000.00'
    })
 
})