import LoginPage from '../models/login-model'

fixture `Login to Mighty`
  .page `https://mighty-client-qa-stable.herokuapp.com`

const loginPage = new LoginPage();

test('Login to Mighty', async t => {
  await loginPage.login('admin@able.co','password')
})
