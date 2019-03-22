import dashboardPage from '../pages/dashboardPage'
import newInvestmentFormPage from '../pages/newInvestmentFormPage'
import newInvestmentPage from '../pages/newInvestmentPage'
import * as roles from '../helper/roleMighty'

const dashboard_page = new dashboardPage()
const newInvestmentForm_page = new newInvestmentFormPage()
const newInvestment_page = new newInvestmentPage()

fixture ('Create holdings')
    .beforeEach( async t => {
        await t
        .maximizeWindow()
        .useRole(roles.regularUser)
    })
    .afterEach( async t => {
        await newInvestment_page.deleteHolding({})
    })

test('Create an equity', async t => {
    await t
    .click(dashboard_page.btnNewInvestment)

    await newInvestmentForm_page.selectGeneralInformation({
        company: 'Able',
        portfolio: 'SNP Portfolio'
    })

    await newInvestmentForm_page.equityData({
        date: '10/05/2013',
        invstAmount: '500',
        shares: '80'
    })  
})

test('Create an llc', async t => {
    await t
    .click(dashboard_page.btnNewInvestment)

    await newInvestmentForm_page.selectGeneralInformation({
        company: 'Able',
        portfolio: 'SNP Portfolio'
    })

    await newInvestmentForm_page.llcData({
        date: '05/02/2011',
        invstAmount: '9000',
    })
})