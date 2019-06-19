import {t, Selector} from 'testcafe';
import { regularUser } from '../page-objects/login_page_roles';
import DashboardPage from '../page-objects/dashboard_page';
import NewInvestmentPage from '../page-objects/investment_page';
import InvestmentDtlPage from '../page-objects/investment_detail_page';

const dashboard = new DashboardPage();
const newinvestment = new NewInvestmentPage();
const investment_dtl_page = new InvestmentDtlPage();

fixture `Delete a Holding from Investment detail page` 
 .beforeEach(async t => {
  await t.useRole(regularUser); 
  await t.click(dashboard.addInvButton).click(dashboard.dropdownHolding);

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

  await  t.click(newinvestment.buttonViewInv)
 });

 test('Test the deletion of a holding', async t => {

    await t
    .click(investment_dtl_page.buttonActions)
    .click(investment_dtl_page.deleteHoldingLink)
    .expect(investment_dtl_page.deleteModalTitle.exists).ok()
    .click(investment_dtl_page.buttonRemove)
    .expect(investment_dtl_page.flashMessage.textContent).eql('Holding successfully deleted');
 });