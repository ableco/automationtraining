import LoginPage from "../pages/login_page"
import HomePage from "../pages/home_page"

const loginPage = new LoginPage();
const homePage = new HomePage();

fixture('Login Tests').page('https://mighty-client-qa-stable.herokuapp.com/login');

test('Login Success', async (t) => {
    await t
        .typeText(loginPage.username, 'admin@able.co')
        .typeText(loginPage.password, 'password')
        .click(loginPage.loginBtn)
        .expect(homePage.dashboardLnk.exists).ok();
});