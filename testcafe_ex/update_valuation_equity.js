import { Selector,t } from 'testcafe';
import PageHoldingDetails from './page_holding_details';
import PageHoldingForm from './page_model_form';
import PageDash from './page_dashboard';
import roleAdmin from './helpers_role';

const pageDashboard = new PageDash();
const pageHoldingForm = new PageHoldingForm();
const pageHoldingDetails = new PageHoldingDetails();

fixture('Update Valuation Equity')
.page('https://mighty-client-qa-stable.herokuapp.com/');
  test('Update Valuation of Equity from Actions button', async (t) => {
    await t
    .useRole(roleAdmin)
    await t
    .click(pageDashboard.newInvestment);
    await pageHoldingForm.createHoldingEquity();
    await t
    await pageHoldingDetails.updateValuationEquityActions();
    

    
    
  });
