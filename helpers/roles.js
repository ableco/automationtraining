import { Role, t } from 'testcafe';
import LoginPage from '../pages/login_page';


const loginPage = new LoginPage();

const loginMighty = Role(
  "https://mighty-client-qa-stable.herokuapp.com/login",
  async t => {
    await login("admin@able.co", "password");
    await t.wait(5000);
  },
  { preserveUrl: true },
);

const login = async (email, password) => {
  await t
    .typeText(loginPage.emailAddressInput, email)
    .typeText(loginPage.passwordInput, password)
    .click(loginPage.loginButton);
};

export { loginMighty };