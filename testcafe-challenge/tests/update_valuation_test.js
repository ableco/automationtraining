import {t, Selector} from 'testcafe';
import { regularUser } from '../page-objects/login_page_roles';
import DashboardPage from '../page-objects/dashboard_page';
import NewInvestmentPage from '../page-objects/investment_page';
import InvestmentDtlPage from '../page-objects/investment_detail_page';

const dashboard = new DashboardPage();
const newinvestment = new NewInvestmentPage();
const investment_dtl_page = new InvestmentDtlPage();

fixture `Update Valuation details` 
 .beforeEach(async t => {
  await t.useRole(regularUser); 
  await t.click(dashboard.addInvButton).click(dashboard.dropdownHolding);
  await newinvestment.createEquityInv(
      {company: 'Helium',
      portfolio : 'Test Portfolio', 
      series : 'Series A',
      customseries : 'Series Test',
      date : '06/17/2019',
      amount : '10.00', 
      shares: '50'}
  )
 });

 test('Test the updation of valuation details', async t => {
    await t
    .expect(newinvestment.modal.textContent).eql('Investment Added!')
    .click(newinvestment.buttonViewInv)
    await investment_dtl_page.updateval({
        text : 'Update Value',
        price : '20'
    })
    //formula - per share value x the no of shares
    await t
    .expect(investment_dtl_page.historyDescription.innerText).eql('Update Value')
    .expect(investment_dtl_page.historyPricePerShare.innerText).eql('$20.0000')
    .expect(investment_dtl_page.historyMarketVal.innerText).eql('$1,000.00')
    .click(investment_dtl_page.buttonActions)
 });