import loginPage from '../pages/loginPage'
import dashboardPage from '../pages/dashboardPage'

const login_page = new loginPage()
const dashboard_page = new dashboardPage()

fixture ('My fixture').page('https://mighty-client-qa-stable.herokuapp.com/login')

test('Login with valid credentials', async t => {
    await t
    .expect(login_page.userMail).ok()
    .typeText(login_page.userMail, 'admin@able.co')
    .expect(login_page.password).ok()
    .typeText(login_page.password, 'password')
    .click(login_page.logIn)
    .expect(dashboard_page.txtHolding.innerText).eql('My Holdings');
})