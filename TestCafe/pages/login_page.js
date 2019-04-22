import {Selector, t} from 'testcafe';

export default class LoginPage {
    constructor(){
        this.username = Selector('input[name="emailInput"]');
        this.password = Selector('input[name="passwordInput"]');
        this.loginBtn = Selector('button').withText('Log In');
    }

    async login(username, password) {
        await t
        .typeText(this.username, username)
        .typeText(this.password, password)
        .click(this.loginBtn);

    }
}