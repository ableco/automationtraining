import { loginMighty } from '../helpers/roles';
import DashboardPage from '../pages/dashboard_page';
import HoldingSummaryPage from '../pages/holding_summary_page';
import CreateHoldingPage from '../pages/create_holding_page';

const dashboardPage = new DashboardPage();
const holdingSummaryPage = new HoldingSummaryPage();
const createHoldingPage = new CreateHoldingPage();

const creatingHoldingData = {
    companyName: 'Amplitude',
    portfolioName: 'Portfolio for Towne LLC',
    series: 'Series B',
    acquisitionDate: '06/21/2019',
    amountInput: '1000',
    sharesInput: '30'
};

const editingHoldingData = {
    companyName: 'Betable',
    portfolioName: 'Portfolio for Hansen, Paucek and Kihn',
    series: 'Series A',
    acquisitionDate: '04/20/2019',
    amountInput: '1000',
    sharesInput: '30'
};

const deletingHoldingData = {
    companyName: 'Able',
    portfolioName: 'Portfolio for Walsh LLC',
    series: 'Series C',
    acquisitionDate: '05/19/2019',
    amountInput: '1000',
    sharesInput: '30'
};

const editMarketValue = {
    valuation: 'Add New Valuation',
    pricePerUnit: '600'
};

fixture('Equity Holding Operations')

    .beforeEach(async t => {
        await t
            .maximizeWindow()
            .useRole(loginMighty);
    });

test("Create Investment Type Equity with mandatory fields", async t => {
    await createHoldingPage.createNewHolding(creatingHoldingData);
    await t.expect(dashboardPage.investmentModal.innerText).eql('Investment Added!')
    await dashboardPage.goToHoldingView();
    await t.expect(holdingSummaryPage.holdingPageTitle.innerText).eql('Holding Summary');
});


test('Update Valuation for Equity', async t => {
    await createHoldingPage.createNewHolding(editingHoldingData);
    await dashboardPage.goToHoldingView();
    const marketValue = await holdingSummaryPage.editInvestmentMarketValue(editMarketValue);
    await t.expect(holdingSummaryPage.getMarketValueRow.innerText).eql(`${marketValue}`, { timeout: 5000 });
});

test('Delete Investment Type Equity', async t => {
    await createHoldingPage.createNewHolding(deletingHoldingData);
    await dashboardPage.goToHoldingView();
    await holdingSummaryPage.deleteInvestment();
    await t.expect(dashboardPage.isSuccessAlert.textContent).eql('Holding successfully deleted', { timeout: 5000 })
});