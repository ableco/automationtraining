import { Selector, t} from 'testcafe';

export default class loginPage {
  constructor () {
    this.email        = Selector('#FormElement1')
    this.password     = Selector('#FormElement2')
    this.submitButton = Selector('button').find('span.Button-text')
  }

  async login (email,password) {
    await t 
      .typeText(this.email, email)
      .typeText(this.password, password)
      .click(this.submitButton)
  }
}
