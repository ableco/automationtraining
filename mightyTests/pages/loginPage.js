import { Selector } from 'testcafe'

export default class Page {
    constructor(){
        this.userMail = Selector('.FormElement--textInput').withAttribute('name','FormElement--emailInput')
        this.password = Selector('.FormElement--textInput').withAttribute('name','FormElement--passwordInput')
        this.logIn = Selector('.Button--default').withText('Log In')
    }
}