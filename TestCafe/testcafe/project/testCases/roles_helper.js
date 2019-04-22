import { Role } from 'testcafe';

const role = Role('https://mighty-client-qa-stable.herokuapp.com/', async t => {
    await t
        .typeText('#FormElement1 > .InputText','admin@able.co')
        .typeText('#FormElement2 > .InputText', 'password')
        .click('#root > div > div > div.u-bg-tint-0.LoginForm > div > form > span > button'); // Redirects to https://mighty-client-qa-stable.herokuapp.com/mighty-mouse-org/dashboard
}, { preserveUrl: true });

fixture `My Fixture`;

test('My test', async t => {
    await t
        .navigateTo('https://mighty-client-qa-stable.herokuapp.com/')

        // Does not return to http://example.com/ but
        // stays at http://example.com?sessionId=abcdef instead
        // because options.preserveUrl is enabled.
        .useRole(role);

});
