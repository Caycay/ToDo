"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var config_1 = require("./config");
var helper_po_1 = require("./helper.po");
var user_data_1 = require("./user-data");
describe('App', function () {
    var helper = new helper_po_1.Helper();
    var EC = protractor_1.protractor.ExpectedConditions;
    beforeAll(function () {
        protractor_1.browser.get(protractor_1.browser.baseUrl);
        config_1.waitForUrl(protractor_1.browser.baseUrl);
    });
    afterAll(function () {
        protractor_1.browser.get('about:blank');
    });
    it("should go to view add list", function () {
        helper.clickButton('addListBtn');
        expect(EC.urlContains('add-list'));
    });
    it("should fill name and description", function () {
        helper.enterMdInputText('inputName', user_data_1.UserData.listName);
        helper.enterMdInputText('inputDescription', user_data_1.UserData.listDescription);
        expect(helper.getInputValue('inputName')).toBe(user_data_1.UserData.listName);
        expect(helper.getInputValue('inputDescription')).toBe(user_data_1.UserData.listDescription);
    });
    it("should save list and go to all lists", function () {
        helper.clickButton('btnAdd');
        config_1.waitForUrl('lists');
        expect(EC.urlContains('lists'));
    });
    it("should display my new list", function () {
        expect(protractor_1.element(protractor_1.by.buttonText(user_data_1.UserData.listName)).getText()).toBe(user_data_1.UserData.listName);
    });
    it("should go to edit list page", function () {
        helper.clickButton('editBtn' + user_data_1.UserData.listName);
        config_1.waitForUrl('edit-list');
        expect(EC.urlContains('edit-list'));
    });
    it("should fill name and description in edit page", function () {
        helper.enterMdInputText('inputEditName', user_data_1.UserData.editListName);
        helper.enterMdInputText('inputEditDesc', user_data_1.UserData.editListDescription);
        expect(helper.getInputValue('inputEditName')).toBe(user_data_1.UserData.editListName);
        expect(helper.getInputValue('inputEditDesc')).toBe(user_data_1.UserData.editListDescription);
    });
    it("should save edit list and go to list", function () {
        helper.clickButton('btnSave');
        config_1.waitForUrl('lists');
        expect(EC.urlContains('lists'));
    });
    it("should go to empty item list", function () {
        helper.clickButton('listBtn' + user_data_1.UserData.editListName);
        config_1.waitForUrl('list-of-item');
        expect(EC.urlContains('list-of-item'));
    });
    it("should click add item button", function () {
        helper.clickButton('btnAddItem');
        config_1.waitForUrl('add-item');
        expect(EC.urlContains('add-item'));
    });
    it("should fill items property", function () {
        helper.enterMdInputText('inputProperty1', 'myProperty');
        helper.enterMdInputText('inputProperty2', 'mySecondProperty');
        expect(helper.getInputValue('inputProperty1')).toBe('myProperty');
        expect(helper.getInputValue('inputProperty2')).toBe('mySecondProperty');
    });
    it("should add item, and go to item list", function () {
        helper.clickButton('btnDone');
        config_1.waitForUrl('list');
        expect(EC.urlContains('list'));
    });
    it("should edit item, and go to item list", function () {
        helper.clickButton('btnDone');
        config_1.waitForUrl('list');
        expect(EC.urlContains('list'));
    });
    it("should delete item, and go to item list", function () {
        helper.clickButton('btnDone');
        config_1.waitForUrl('list');
        expect(EC.urlContains('list'));
    });
    it("should delete list", function () {
        helper.clickButton('btnDone');
        config_1.waitForUrl('list');
        expect(EC.urlContains('list'));
    });
});
