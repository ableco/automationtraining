import { Selector } from 'testcafe';

export default class Login {
    constructor () {
        this.email    = Selector('.InputText').withAttribute('placeholder','Email Address')
        this.password = Selector('.InputText').withAttribute('placeholder','Password')
        this.submit = Selector('.btn')
    }
}
