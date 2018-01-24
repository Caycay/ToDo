"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var config_1 = require("./config");
var helper_po_1 = require("./helper.po");
describe('App', function () {
    var helper = new helper_po_1.Helper();
    var EC = protractor_1.protractor.ExpectedConditions;
    beforeAll(function () {
        protractor_1.browser.get('http://localhost:9001/');
    });
    afterAll(function () {
        protractor_1.browser.get('about:blank');
    });
    it("should go to view add list", function () {
        config_1.waitForUrl('localhost:9001');
        helper.clickButton('addListBtn');
        expect(EC.urlContains('add-list'));
    });
    it("should fill name and description", function () {
        helper.enterMdInputText('inputName', 'myE2EList');
        helper.enterMdInputText('inputDescription', 'testE2E');
        expect(helper.getInputValue('inputName')).toBe('myE2EList');
        expect(helper.getInputValue('inputDescription')).toBe('testE2E');
    });
    it("should save list and go to lists", function () {
        helper.clickButton('btnAdd');
        config_1.waitForUrl('lists');
        expect(EC.urlContains('lists'));
    });
    xit("should display my new list", function () {
        var element = element.all(protractor_1.by.css('#name0')).first();
        expect(element.getText()).toBe('myE2EList');
    });
    it("should go to edit list page", function () {
        helper.clickButton('edit0');
        config_1.waitForUrl('edit-list');
        expect(EC.urlContains('edit-list'));
    });
    it("should fill name and description in edit page", function () {
        helper.enterMdInputText('inputEditName', 'editE2EName');
        helper.enterMdInputText('inputEditDesc', 'editDesc');
        expect(helper.getInputValue('inputEditName')).toBe('editE2EName');
        expect(helper.getInputValue('inputEditDesc')).toBe('editDesc');
    });
    it("should save edit list and go to list", function () {
        helper.clickButton('btnSave');
        config_1.waitForUrl('lists');
        expect(EC.urlContains('lists'));
    });
    it("should go to add item page", function () {
        helper.clickButton('name0');
        config_1.waitForUrl('add-item');
        expect(EC.urlContains('add-item'));
    });
    it("should fill items property", function () {
        helper.enterMdInputText('inputProperty1', 'myProperty');
        helper.enterMdInputText('inputProperty2', 'mySecondProperty');
        expect(helper.getInputValue('inputProperty1')).toBe('myProperty');
        expect(helper.getInputValue('inputProperty2')).toBe('mySecondProperty');
    });
    it("should add item, and go to list", function () {
        helper.clickButton('btnDone');
        config_1.waitForUrl('lists');
        expect(EC.urlContains('lists'));
    });
});
