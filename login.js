import { Selector } from 'testcafe';
// import Login from '../page-model/page-model-login'; 
import role from './role';
import Dashboard from './page-model/page-model-dashboard';

const dash = new Dashboard();

fixture('User Login')
  .page('https://mighty-client-qa-stable.herokuapp.com/');

test('User logged in successfully', async t => {
    await t
        .useRole(role);
    await t
        .expect(dash.dashboard.innerText).contains('My Holdings');
});
