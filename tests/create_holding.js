import LoginPage from '../pages/login_page';
import LandingPage from '../pages/landing_page';
import InvestmentPage from '../pages/investment_page';
import HoldingPage from '../pages/holding_page';

const loginPage = new LoginPage();
const landingPage = new LandingPage();
const investmentPage = new InvestmentPage();
const holdingPage = new HoldingPage();

fixture('Holding')
    .page('https://mighty-client-qa-stable.herokuapp.com/');

test("Creating a holding", async(t)=>{
        await loginPage.logIn('admin@able.co','password');
        await landingPage.clickHolding();
        await investmentPage.createHolding('Test Company','Test','20.0000','1');
        await t
            .click(holdingPage.viewInvestmentButton)
        await t
            .expect(holdingPage.investmentHeadline.innerText).eql('Series Seed');
    });