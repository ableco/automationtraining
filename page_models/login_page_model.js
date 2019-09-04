import { Selector, t } from "testcafe";

export default class LoginPageModel{
  constructor() {
    this.emailInputText = Selector(".InputText").withAttribute("name", "emailInput");
    this.PasswordInputText = Selector(".InputText").withAttribute("name", "passwordInput");
    this.SubmitButton = Selector(".Button-holder");
  }

  async logIn(UserInformation) {
    await t
      .typeText(this.emailInputText, UserInformation.email)
      .typeText(this.PasswordInputText, UserInformation.password)
      .click(this.SubmitButton)
  }
}