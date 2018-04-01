import {$, browser, by, element, protractor} from 'protractor';
import {waitForUrl} from "./config";
import {Helper} from "./helper.po";
import {UserData} from "./user-data";

describe('App', ()=>{
  let helper: Helper = new Helper();
  const EC = protractor.ExpectedConditions;

  beforeAll(()=>{
    browser.get(browser.baseUrl);
    waitForUrl(browser.baseUrl);
  });
  afterAll(()=>{
    browser.get('about:blank');
  });

  it(`should go to view add list`, ()=>{
    helper.clickButton('addListBtn');
    expect(EC.urlContains('add-list'));
  });
  it(`should fill name and description`, ()=>{
    helper.enterMdInputText('inputName', UserData.listName);
    helper.enterMdInputText('inputDescription', UserData.listDescription);
    expect(helper.getInputValue('inputName')).toBe(UserData.listName);
    expect(helper.getInputValue('inputDescription')).toBe(UserData.listDescription);
  });
  it(`should save list and go to all lists`, ()=>{
    helper.clickButton('btnAdd');
    waitForUrl('lists');
    expect(EC.urlContains('lists'));
  });
  it(`should display my new list`, ()=>{
    expect(element(by.buttonText(UserData.listName)).getText()).toBe(UserData.listName);
  });
  it(`should go to edit list page`, ()=>{
    helper.clickButton('editBtn'+ UserData.listName);
    waitForUrl('edit-list');
    expect(EC.urlContains('edit-list'));
  });
  it(`should fill name and description in edit page`, ()=>{
    helper.enterMdInputText('inputEditName', UserData.editListName);
    helper.enterMdInputText('inputEditDesc', UserData.editListDescription);
    expect(helper.getInputValue('inputEditName')).toBe(UserData.editListName);
    expect(helper.getInputValue('inputEditDesc')).toBe(UserData.editListDescription);
  });
  it(`should save edit list and go to list`, ()=>{
    helper.clickButton('btnSave');
    waitForUrl('lists');
    expect(EC.urlContains('lists'));
  });
  it(`should go to empty item list`, ()=>{
    helper.clickButton('listBtn'+UserData.editListName);
    waitForUrl('list-of-item');
    expect(EC.urlContains('list-of-item'));
  });
  it(`should click add item button`, ()=>{
    helper.clickButton('btnAddItem');
    waitForUrl('add-item');
    expect(EC.urlContains('add-item'));
  });
  it(`should fill items property`, ()=>{
    helper.enterMdInputText('inputProperty1', 'myProperty');
    helper.enterMdInputText('inputProperty2', 'mySecondProperty');
    expect(helper.getInputValue('inputProperty1')).toBe('myProperty');
    expect(helper.getInputValue('inputProperty2')).toBe('mySecondProperty');
  });
  it(`should add item, and go to item list`, ()=>{
    helper.clickButton('btnDone');
    waitForUrl('list');
    expect(EC.urlContains('list'));
  });
});
