import { t } from 'testcafe';
import PageHoldingForm from './page_models/page_model_form';
import PageDash from './page_models/page_dashboard';
import roleAdmin from './helpers/helpers_role';

const pageDashboard = new PageDash();
const pageHoldingForm = new PageHoldingForm();

fixture('Create Holding')
.page('https://mighty-client-qa-stable.herokuapp.com/');
  test('Create Holding', async t => {
    await t.useRole(roleAdmin)
    await t.click(pageDashboard.newInvestment);
    await pageHoldingForm.createHoldingEquity();
  });