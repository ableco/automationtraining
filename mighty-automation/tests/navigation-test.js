import LoginPage from '../models/login-model'
import NavigationPage from '../models/navigation-model'

fixture `Go to + New Investment`
  .page `https://mighty-client-qa-stable.herokuapp.com`

const loginPage = new LoginPage();
const navigationPage = new NavigationPage();

test('Go to New Investment', async t => {
  await loginPage.login('admin@able.co','password')
  await navigationPage.goToNewInvestment()
})

test('Go to Companies', async t => {
  await loginPage.login('admin@able.co','password')
  await navigationPage.goToCompanies()
})

test('Go to Portfolios', async t => {
  await loginPage.login('admin@able.co','password')
  await navigationPage.goToPortfolios()
})
