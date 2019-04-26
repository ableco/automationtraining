import { Selector, t } from 'testcafe';

export default class LoginPage{
    constructor(){
        this.username = Selector('input[name="emailInput"]');
        this.password = Selector('input[name="passwordInput"]');
        this.submit = Selector('button[type="submit"]');
        this.forgotPassword = Selector('a').withText('Forgot your password')

    }

    async login (user, pass){
        await t
            .typeText(this.username, user)
            .typeText(this.password, pass)
            .click(this.submit);
    }
}