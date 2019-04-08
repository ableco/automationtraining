import LoginPage from '../models/login-model'
import NavigationPage from '../models/navigation-model'
import CompaniesPage from '../models/companies-model'
import CompanyPage from '../models/company-model'
import HoldingSummaryPage from '../models/holdingSummary-model'

const loginPage = new LoginPage();
const navigationPage = new NavigationPage();
const companiesPage = new CompaniesPage();
const companyPage = new CompanyPage();
const holdingSummaryPage = new HoldingSummaryPage();

fixture `Holding Summary`
  .page `https://mighty-client-qa-stable.herokuapp.com`
  .beforeEach( async t => {
    await loginPage.login('admin@able.co','password')
  })

test('Delete Holding', async t => {
  await navigationPage.goToCompanies()
  await companiesPage.gotoCompanyDetailsPage('Test Company')
  await t.wait(25000)
  await companyPage.goToMyHolding()
  await companyPage.displayListOfHoldings('Test Portfolio')
  await companyPage.selectHolding('Series Seed')
  await holdingSummaryPage.deleteHolding()
  await t.wait(20000)
  await t.expect(companyPage.flashMessage.innerText).eql('Holding successfully deleted')
})
test('Update Valuation', async t => {
  await navigationPage.goToCompanies()
  await companiesPage.gotoCompanyDetailsPage('Test Company 2')
  await companyPage.goToMyHolding()
  await companyPage.displayListOfHoldings('Test Portfolio')
  await companyPage.selectHolding('Series Seed')
  await holdingSummaryPage.updateValuation('Valuation 1','500')
  //await t.expect(companyPage.flashMessage.innerText).eql('Holding successfully deleted')
})
