import { Selector } from 'testcafe'; //
import Page from './page_model';
import PageDash from './page_dashboard';
import roleAdmin from './helpers_role';

const page = new Page();
const pageDashboard = new PageDash();
fixture('Login')
  .page('https://mighty-client-qa-stable.herokuapp.com/');
test('successful login', async t => {
    await t 
    .useRole(roleAdmin);
    await t
    .expect(pageDashboard.dashboard.innerText).contains('My Holdings');
  });