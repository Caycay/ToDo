import {$, browser, by, element, protractor} from 'protractor';
import {waitForUrl} from "./config";
import {Helper} from "./helper.po";

describe('Home', ()=>{
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
    helper.enterMdInputText('inputName', 'myE2EList');
    helper.enterMdInputText('inputDescription', 'testE2E');
    expect(helper.getInputValue('inputName')).toBe('myE2EList');
    expect(helper.getInputValue('inputDescription')).toBe('testE2E');

  });
  it(`should save list and go to lists`, ()=>{
    helper.clickButton('btnAdd');
    waitForUrl('lists');
    expect(EC.urlContains('lists'));
  });
  xit(`should display my new list`, ()=>{
    let element = element.all(by.css('#name0')).first();
    expect(element.getText()).toBe('myE2EList');
  });
  it(`should go to edit list page`, ()=>{
    helper.clickButton('edit0');
    waitForUrl('edit-list');
    expect(EC.urlContains('edit-list'));
  });
  it(`should fill name and description in edit page`, ()=>{
    helper.enterMdInputText('inputEditName', 'editE2EName');
    helper.enterMdInputText('inputEditDesc', 'editDesc');
    expect(helper.getInputValue('inputEditName')).toBe('editE2EName');
    expect(helper.getInputValue('inputEditDesc')).toBe('editDesc');
  });
  it(`should save edit list and go to list`, ()=>{
    helper.clickButton('btnSave');
    waitForUrl('lists');
    expect(EC.urlContains('lists'));
  });
  it(`should go to empty item list`, ()=>{
    helper.clickButton('name0');
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
