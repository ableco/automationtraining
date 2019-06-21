import { Selector, t } from 'testcafe';

export default class LoginPage {
    constructor() {
        this.emailAddressInput = Selector('.InputText').withAttribute('name', 'emailInput');
        this.passwordInput = Selector('.InputText').withAttribute('name', 'passwordInput');
        this.loginButton = Selector('.LoginAnimatedElement').withAttribute('type', 'submit');
    };

    async login(email, password) {
        await t
            .typeText(this.emailAddressInput, email)
            .typeText(this.passwordInput, password)
            .click(this.loginButton);
    };
};