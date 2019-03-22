import { Role } from 'testcafe';
import loginPage from '../pages/loginPage'

const login_page = new loginPage()
export const regularUser = Role('https://mighty-client-qa-stable.herokuapp.com/login', async t => {
    await t
    .expect(login_page.userMail).ok()
    .typeText(login_page.userMail, 'admin@able.co')
    .expect(login_page.password).ok()
    .typeText(login_page.password, 'password')
    .click(login_page.logIn)
}, { preserveUrl: true });