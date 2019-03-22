import { Selector } from "testcafe";
import regularUser from '../helper/roles';


fixture `Login to Mighty` 

test('Log in to Mighty | C67003', async t => {
    const header = Selector('.DashboardLayoutColumn-title');
    await t
        .useRole(regularUser)
        .expect(header.textContent).eql('My Holdings');
})

