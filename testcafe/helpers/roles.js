import { Role, t } from "testcafe";
import LoginPage from "../page-models/login";

const loginPage = new LoginPage();

const loginAccount = Role(
    "https://mighty-client-qa-stable.herokuapp.com/login",
    async t => {
      await login("admin@able.co", "password");
      await t.wait(5000);
    },
    { preserveUrl: true },
  );

const login = async (user, password) => {
    await t
      .typeText(loginPage.username, user)
      .typeText(loginPage.password, password)
      .click(loginPage.submit);
  };
  
export { loginAccount };
