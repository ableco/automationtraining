
import {t} from 'testcafe';
import { regularUser } from '../page-objects/login_page_roles';
import DashboardPage from '../page-objects/dashboard_page';

const dashboard = new DashboardPage()

fixture `User Login`
.meta({ critical: "true" })

test('Test the user login', async t => {
    await t
    .useRole(regularUser)
    //await t
    .expect(dashboard.holdingsText.innerText).eql('Organization Holdings');
    //.expect(dashboard.Holdingstext.exists).ok();
});
