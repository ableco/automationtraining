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
    await t
        .click(createEquity.company)
        .click(createEquity.companyValue.withText('15Five'))
        .click(createEquity.portfolio)
        .click(createEquity.companyValue.withText('Actions Portfolio'))
        .click(createEquity.investementType)
        .click(createEquity.series)
        .click(createEquity.seriesValue.withText('Common Stock'))
        .typeText(createEquity.investmentAmount, '1000')
        .typeText(createEquity.sharesNumber, '5')
        .click(createEquity.addHoldingBtn)
        .expect(createEquity.investmentModal.innerText).contains('Investment Added!')
        .click(createEquity.viewInvestment)
});

