import {$, browser, by, element, protractor} from 'protractor';
import {waitForUrl} from "./config";
import {Helper} from "./helper.po";

describe('Home', ()=>{
  let helper: Helper = new Helper();
  const EC = protractor.ExpectedConditions;

  beforeAll(()=>{
    browser.get('http://localhost:9000/');
  });
  afterAll(()=>{
    browser.get('about:blank');
  });

  it(`should go to view add list`, ()=>{
    waitForUrl('localhost:9000');
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
    let element = element.all(by.css('#name0')).first(); //all is undefined
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
  it(`should go to add item page`, ()=>{
    helper.clickButton('name0');
    waitForUrl('add-item');
    expect(EC.urlContains('add-item'));
  });
  it(`should fill items property`, ()=>{
    helper.enterMdInputText('inputProperty1', 'myProperty');
    helper.enterMdInputText('inputProperty2', 'mySecondProperty');
    expect(helper.getInputValue('inputProperty1')).toBe('myProperty');
    expect(helper.getInputValue('inputProperty2')).toBe('mySecondProperty');
  });
  it(`should add item, and go to list`, ()=>{
    helper.clickButton('btnDone');
    waitForUrl('lists');
    expect(EC.urlContains('lists'));
  });
  
});
