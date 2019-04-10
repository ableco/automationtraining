import { Selector } from 'testcafe';
import role from './role';
import Dashboard from './page-model/page-model-dashboard';
import CreateEquity from './page-model/page-model-create-equity';

const dash = new Dashboard();
const createEquity = new CreateEquity();

fixture('User Login')
  .page('https://mighty-client-qa-stable.herokuapp.com/');

test('Create ', async t => {
    await t
        .useRole(role);
    await t
        .click(dash.newInvestement);
    await
        createEquity.createEquity();
});

