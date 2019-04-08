import LoginPage from '../models/login-model'
import NavigationPage from '../models/navigation-model'
import NewInvestmentPage from '../models/newInvestment-model'

const loginPage = new LoginPage();
const navigationPage = new NavigationPage();
const newInvestmentPage = new NewInvestmentPage();

fixture `Create New Investment`
  .page `https://mighty-client-qa-stable.herokuapp.com`
  .beforeEach( async t => {
    await loginPage.login('admin@able.co','password')
  })

test('Create a New Investment', async t => {
  await navigationPage.goToNewInvestment()
  await newInvestmentPage.createNewInvestment('Test Company 2', 'Test Portfolio','1000','5')
  await t.wait(25000)
         .expect(newInvestmentPage.messageResult.innerText).eql('Investment Added!')
})
