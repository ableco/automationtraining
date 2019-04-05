import { Selector } from 'testcafe';
// import Login from '../page-model/page-model-login'; 
import role from './role';

// const dash = new Dashboard();
const dashboard = Selector('.DashboardHomeColumn');

fixture('User Login')
  .page('https://mighty-client-qa-stable.herokuapp.com/');

test('User logged in successfully', async t => {
    await t
        .useRole(role);
    await t
        .expect(dashboard.innerText).contains('My Holdings');
});

