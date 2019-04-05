import { Role } from 'testcafe';
import Login from './page-model/page-model-login';

const loginPage = new Login()

const role = Role('https://mighty-client-qa-stable.herokuapp.com/login', async t => {
    await t
        .typeText(loginPage.email, 'admin@able.co')
        .typeText(loginPage.password, 'password')
        .click(loginPage.submit);
}, { preserveUrl: true });

export default role;
