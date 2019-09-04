import DashboardPageModel from '../page_models/dashboard_page_model';
import LoginPageModel from '../page_models/login_page_model';
import NewholdingPageModel from '../page_models/newholding_page_model';

const dashboardPage = new DashboardPageModel();
const loginPage = new LoginPageModel();
const newholdingPage = new NewholdingPageModel();

fixture`create equity`
  .page`https://mighty-client-qa-stable.herokuapp.com/`

test("Create equity holding", async t => {
  await loginPage.logIn({
    email: "admin@able.co",
    password: "password"
  })

  await t.expect(dashboardPage.dashboardTitle.textContent).eql("Organization Holdings");
  await t.click(dashboardPage.addnewButton);
  await t.click(dashboardPage.newHoldingButton);
  await t.expect(newholdingPage.newholdingTitle.textContent).eql("Create a New Investment");

  await newholdingPage.createNewHoldingWithMandatoryFields({
    company: "Dropbox",
    portfolio: "Portfolio500",
    series: 'Series A',
    customseries: 'Equity Test 07',
    date: '03/09/2019',
    amount: '1.00',
    shares: '100'
  });

  await t.expect(newholdingPage.confirmationModalTitle.textContent).eql("Investment Added!");
  await t.click(newholdingPage.viewInvestmentButton);
});