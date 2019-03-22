import { Selector } from 'testcafe'

export default class Page {
    constructor () {
        this.email = Selector('.FormElement--textInput .InputText').withAttribute('name','emailInput')
        this.password = Selector('.FormElement--textInput .InputText').withAttribute('name','passwordInput')
        this.loginButton = Selector('.btn')
    }
}