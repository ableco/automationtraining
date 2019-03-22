import { Selector, t } from 'testcafe';
export default class Page {
    constructor () {
    this.userName = Selector('input').withAttribute('placeholder', 'Email Address');
    this.password = Selector('input').withAttribute('placeholder', 'Password');
}
    async login1(){
        await t
        .typeText(this.userName, 'admin@able.co')
        .typeText(this.password, 'password')
        .pressKey('enter')
        
        
    }

    
}