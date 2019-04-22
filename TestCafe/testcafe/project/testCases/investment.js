import LoginPage from '../../mightyAutomation/pages/loginPage';
import HomePage from '../../mightyAutomation/pages/homePage';
import NewInvestmentPage from '../pages/newInvestmentPage';

const loginPage = new LoginPage();
const homePage = new HomePage();
const newInvestmentPage = new NewInvestmentPage();

fixture('Investment Tests')
    .page('https://mighty-client-qa-stable.herokuapp.com/login')
    .beforeEach( async t => {
        await loginPage.login('admin@able.co', 'password');
    });

test('Create Investment', async t => {
    await t
        .click(homePage.addNewBtn)
        .click(homePage.newHoldingMenuItem)

        .click(newInvestmentPage.companyDropDown)
        .typeText(newInvestmentPage.companyInputTxt, 'Test Company')
        .pressKey('tab')

        .click(newInvestmentPage.portfolioDropDown)
        .typeText(newInvestmentPage.portfolioInputTxt, 'Test Portafolio')
        .pressKey('tab')

        .click(newInvestmentPage.equityButton)
        .click(newInvestmentPage.seriesDropDown)
        .click(newInvestmentPage.seriesOptions.withText('Series Seed'))
        .typeText(newInvestmentPage.customSeriesName, 'abc')
        .typeText(newInvestmentPage.adquisitionDate, '12252018')
        .typeText(newInvestmentPage.investmentAmount, '10000')
        .typeText(newInvestmentPage.numberOfShares, '400')
        .click(newInvestmentPage.addHoldingBtn)
        .expect(newInvestmentPage.confirmationH1.innerText).eql('Investment Added!');
});

