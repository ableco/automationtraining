import LoginPage from '../pages/login_page';
import LandingPage from '../pages/landing_page';
import InvestmentPage from '../pages/investment_page';
import HoldingPage from '../pages/holding_page';
import UpdateValuationPopup from '../pages/update_valuation_popup';

const loginPage = new LoginPage();
const landingPage = new LandingPage();
const investmentPage = new InvestmentPage();
const holdingPage = new HoldingPage();
const valuationPopup = new UpdateValuationPopup();

fixture('Holding')
    .page('https://mighty-client-qa-stable.herokuapp.com/');

test("Update Valuation", async(t)=>{
        await loginPage.logIn('admin@able.co','password');
        await landingPage.clickHolding();
        await investmentPage.createHolding('Test Company','Test','20.0000','1');
        await holdingPage.updateHolding();
        await valuationPopup.updateValuation('Valuation 1','500');
        await t
            .expect(holdingPage.valuationDescription.innerText).contains('Valuation 1')
            .expect(holdingPage.costBasisDescription.innerText).contains('$500.0000')
            .expect(holdingPage.marketValueDescription.innerText).contains('$500.00')
            .expect(holdingPage.currentValuationValue.innerText).contains('$500.00');
    });