import { loginMighty } from './roles';
import DashboardPage from './dashboard';
import HoldingSummaryPage from './holding_summary';
import CreateHoldingPage from './create_investment';

const dashboardPage = new DashboardPage();
const holdingSummaryPage = new HoldingSummaryPage();
const createHoldingPage = new CreateHoldingPage();

const creatingHoldingData = {
    companyName: 'Chatous',
    portfolioName: 'Test Portafolio',
    typeInvestment: 'Equity',
    series: 'Series G',
    acquisitionDate: '09/02/2019',
    amountInput: '1234',
    sharesInput: '2'
};



test("Create Investment", async t => {
    await createHoldingPage.createNewHolding(creatingHoldingData);
    //await t.expect(dashboardPage.investmentModal.innerText).eql('Investment Added!')
    await dashboardPage.goToHoldingView();
    await t.expect(holdingSummaryPage.holdingPageTitle.innerText).eql('Holding Summary');
});


