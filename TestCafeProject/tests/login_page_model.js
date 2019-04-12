import { Selector , t } from 'testcafe';

export default class  LoginPageModel {
    constructor () {
        this.email = Selector('.InputText').withAttribute('placeholder', 'Email Address')
        this.password= Selector('.InputText').withAttribute('placeholder', 'Password')
        this.loginButton = Selector ('.Button-holder');
    }
}


