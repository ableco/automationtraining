
import { Role } from "testcafe";
import Page from 'loginPage';

const pageLogin = new Page();

const regularUser = Role('https://mighty-client-qa-stable.herokuapp.com/login', async t => {
    await t
        .typeText(pageLogin.email, 'admin@able.co')
        .typeText(pageLogin.password, 'password')
        .click(pageLogin.loginButton); 
}, { preserveUrl: true });


export default regularUser;