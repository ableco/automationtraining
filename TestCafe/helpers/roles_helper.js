import {Role} from 'testcafe';

const adminRole = Role('https://mighty-client-qa-stable.herokuapp.com/login', async t => {
    await t
        .typeText('input[name="emailInput"]','admin@able.co')
        .typeText('input[name="passwordInput"]', 'password')
        .click('button')
        .wait(5000)
},{preserveUrl:true});

export default adminRole;




