import { Selector } from 'testcafe';
import role from './role';
import Dashboard from './page-model/page-model-dashboard';
import CreateEquity from './page-model/page-model-create-equity';
import UpdateEquity from './page-model/page-model-update-equity';

const dash = new Dashboard();
const createEquity = new CreateEquity();
const updateEquity = new UpdateEquity();

fixture('Update Equity')
  .page('https://mighty-client-qa-stable.herokuapp.com/');

test('Create ', async t => {
    await t
        .useRole(role);
    await t
        .click(dash.newInvestement);
    await
        createEquity.createEquity();
    await
        updateEquity.updateEquity();
});

