import { Selector, t} from 'testcafe'

export default class LoginPage{
    constructor(){
        this.emailInput = Selector('div').withAttribute('name','FormElement--emailInput');
        this.passInput = Selector('div').withAttribute('name','FormElement--passwordInput');
        this.loginButton = Selector('.Button-holder');
        
    }

    async logIn (email, password){
        
        await t
            .typeText(this.emailInput, email)
            .typeText(this.passInput, password)
            .click(this.loginButton);
    }

    
}
