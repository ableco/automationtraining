import { Selector,t } from 'testcafe';
import PageHoldingDetails from './page_holding_details';
import PageHoldingForm from './page_model_form';
import PageDash from './page_dashboard';
import roleAdmin from './helpers_role';

const pageDashboard = new PageDash();
const pageHoldingForm = new PageHoldingForm();
const pageHoldingDetails = new PageHoldingDetails();

const confirmationModal = Selector('.CreatedInvestmentConfirmation-headline');
const viewInvestmentButton = Selector('.btn .Button-holder').withText('View Investment');


fixture('Delete Holding')
.page('https://mighty-client-qa-stable.herokuapp.com/');
  test('Delete Holding', async (t) => {
    await t
    .useRole(roleAdmin)
    await t
    .click(pageDashboard.newInvestment);
    await pageHoldingForm.createHolding();
    await t
    await pageHoldingDetails.deleteHolding();
    
    
    
  });


















