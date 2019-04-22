import { Selector } from 'testcafe';

fixture `Getting Started`
    .page `https://mighty-client-qa-stable.herokuapp.com/`;
  

test('My first test', async t => {
    await t
    .typeText('input[name="emailInput"]', 'admin@able.co')
    .typeText('input[name="passwordInput"]', 'password')
    .click('svg')
    


    const articleHeader = await Selector ('.main').find('h3');

    //Obtain the text of the article header
   let headerText = await articleHeader.innerText;
   console.log(headerText);
   await t
    .click('btn Button Button--small Button--secondary')
    .click('u-dropdownLink DropdownMenuItem-anchor')


});