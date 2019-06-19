import {Selector, Role, t } from 'testcafe';

export const regularUser = Role('https://mighty-client-qa-stable.herokuapp.com/login',async t =>{ 
    const fieldEmailAddress = Selector('.FormElement .InputHolder .InputText').withAttribute('name','emailInput');
    const fieldPassword = Selector('.FormElement .InputHolder .InputText').withAttribute('name','passwordInput');
    const logInButton = Selector('.Button--primary .Button-text');
    //const welcomeMsg = Selector('h1 .LoginAnimatedElement').withText('Welcome to Mighty Portfolio!');
    await t 
    .typeText(fieldEmailAddress,"admin@able.co")
    .typeText(fieldPassword,"password")
    .click(logInButton)
    await 
    t.wait(5000);
}, { preserveUrl: true });


