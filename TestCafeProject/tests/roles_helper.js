import { Role } from 'testcafe';
import LoginPageModel from './login_page_model';

const loginPage = new LoginPageModel ();

export const adminUser = Role ('https://mighty-client-qa-stable.herokuapp.com/', async t => {
    await t
    .typeText(loginPage.email, 'admin@able.co')
    .typeText(loginPage.password, 'password')
    .click(loginPage.loginButton)
    .wait(5500)
}, { preserveUrl: true });