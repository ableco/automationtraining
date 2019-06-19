import {t, Selector} from 'testcafe';
import { regularUser } from '../page-objects/login_page_roles';
import DashboardPage from '../page-objects/dashboard_page';
import NewInvestmentPage from '../page-objects/investment_page';
import InvestmentDtlPage from '../page-objects/investment_detail_page';

const dashboard = new DashboardPage();
const newinvestment = new NewInvestmentPage();
const investment_dtl_page = new InvestmentDtlPage();

fixture `New Investment details` 
 .beforeEach(async t => {
  await t.useRole(regularUser); 
 });

test('Test the creation of new investment', async t => {
    await t
    .click(dashboard.addInvButton)
    .click(dashboard.dropdownHolding);

    await 
    newinvestment.createEquityInv(
        {company: 'Helium',
        portfolio : 'Test Portfolio', 
        series : 'Series A',
        customseries : 'Series Test',
        date : '06/17/2019',
        amount : '10.00', 
        //selectinv : 'Total',
        shares: '50'}
    )
    
    await t
    .expect(newinvestment.modal.textContent).eql('Investment Added!')
    .click(newinvestment.buttonViewInv)

});

