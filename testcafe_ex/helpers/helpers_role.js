import {Role} from 'testcafe';
import Page from '../page_models/page_model';

const pageLogin = new Page();
const roleAdmin = Role('https://mighty-client-qa-stable.herokuapp.com/', async t => {
  
    await t
        .typeText(pageLogin.userName, 'admin@able.co')
        .typeText(pageLogin.password, 'password')
        .pressKey('enter');
},{ preserveUrl: true }); 

export default roleAdmin;
        
    

    
