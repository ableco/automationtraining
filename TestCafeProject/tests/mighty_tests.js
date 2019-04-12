import landingPageModel from './landing_page_model';
import createInvesmentPageModel from './create_invesment_page_model';
import invesmentPageModel from './invesment_page_model';
import  { adminUser } from './roles_helper';

const landingPage = new landingPageModel();
const newInvesmentCreation = new createInvesmentPageModel ();
const invesment = new invesmentPageModel();

fixture `My fixture`
    .beforeEach(async t => {
        await t
            .useRole(adminUser)
             .wait(10000)
            .expect(landingPage.header.exists).ok();
    });

test ('Create Invesment', async t => {
    await landingPage.clickOnNewInvesmentOption(); 
    await newInvesmentCreation.createNewInvesment ();
    }); 

test ('Delete Invesment', async t => {
    await landingPage.clickOnNewInvesmentOption(); 
    await newInvesmentCreation.createNewInvesment ();
    await t 
       .click (newInvesmentCreation.viewInvesment);
    await invesment.deleteInvesment();
    }); 

test ('Update Valuation', async t => {
    await landingPage.clickOnNewInvesmentOption(); 
    await newInvesmentCreation.createNewInvesment ();
    await t 
       .click (newInvesmentCreation.viewInvesment);
    await invesment.updateValuation();
    }); 