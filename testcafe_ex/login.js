import { t } from 'testcafe'; 
import Page from './page_models/page_model';
import PageDash from './page_models/page_dashboard';
import roleAdmin from './helpers/helpers_role';

const pageDashboard = new PageDash();
fixture('Login')
  .page('https://mighty-client-qa-stable.herokuapp.com/');
test('successful login', async t => {
    await t 
    .useRole(roleAdmin);
    await t
    .expect(pageDashboard.dashboard.innerText).contains('My Holdings');
  });