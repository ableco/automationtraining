import { Selector } from 'testcafe';

fixture `Login`
    .page `https://mighty-client-qa-stable.herokuapp.com/`;
  
    

    test('login', async t => {
        const email = await Selector ('input[name="emailInput"]');
        const password = await Selector ('input[name="passwordInput"]');
        const loginButton = await Selector ('button')
    await t
    .typeText(email, 'admin@able.co')
    .typeText(password, 'password')
    .click(loginButton)
    
        const articleHeader = await Selector ('.content').find('h3');

    //Obtain the text of the article header
    let headerText = await articleHeader.innerText;
    console.log(headerText);

        const addNew = await Selector ('button.btn')
        const newHolding = await Selector ('.DropdownMenu>li:last-of-type')
   await t
    .click(addNew)
    .click(newHolding)
    
    const createNewInvestment = await Selector ('.FormSection').find('h1');

    //Obtain the text of the article header
    let titleText = await createNewInvestment.innerText;
    console.log(titleText);
  
        const company = await Selector ('#FormElement60')
        const companyType = await Selector ('#FormElement60>div input')
        const portfolio = await Selector ('#FormElement61')
        const portfolioName = await Selector ('#FormElement61>div input')
    await t
    .click(companyType)
    .typeText(companyType, 'Type Company')
    .pressKey ('enter')
    .click(portfolioName)
    .typeText(portfolioName, 'Test Portafolio')

});