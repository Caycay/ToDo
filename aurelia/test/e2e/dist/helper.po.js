"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var config_1 = require("./config");
var Helper = (function () {
    function Helper() {
    }
    Helper.prototype.getInputValue = function (id) {
        config_1.waitForId(id);
        var input = protractor_1.element(protractor_1.by.css('#' + id + ' input'));
        return input.getAttribute('value');
    };
    Helper.prototype.chooseOption = function (id) {
        config_1.waitForId(id);
        var button = protractor_1.element(protractor_1.by.id(id));
        config_1.waitUntilClickable(button);
        button.click();
    };
    Helper.prototype.clickFirstElement = function (css) {
        config_1.waitForCss(css);
        var el = protractor_1.element.all(protractor_1.by.css(css)).get(0);
        config_1.waitUntilClickable(el);
        el.click();
    };
    Helper.prototype.clickOnElementByEl = function (el, timeout) {
        if (timeout === void 0) { timeout = 15000; }
        config_1.waitUntilClickable(el, timeout);
        el.click();
    };
    Helper.prototype.clickOnElementById = function (id, timeout) {
        if (timeout === void 0) { timeout = 10000; }
        config_1.waitForId(id, timeout);
        var elem = protractor_1.element(protractor_1.by.id(id));
        config_1.waitUntilClickable(elem, timeout);
        this.clickButton(id);
    };
    Helper.prototype.getCheckedRadioButtonValue = function () {
        return config_1.byCss('input[type=\'radio\']:checked').getAttribute('value');
    };
    Helper.prototype.countElements = function (css) {
        return protractor_1.element.all(protractor_1.by.css(css)).count();
    };
    Helper.prototype.enterMdInputText = function (id, text) {
        config_1.waitForId(id);
        var input = protractor_1.element(protractor_1.by.css('#' + id + ' input'));
        input.clear().then(function () { return input.sendKeys(text); });
        return input;
    };
    Helper.prototype.enterInputText = function (id, text) {
        config_1.waitForId(id);
        var input = protractor_1.element(protractor_1.by.css('#' + id));
        input.clear().then(function () { return input.sendKeys(text); });
        return input;
    };
    Helper.prototype.clickButton = function (id) {
        var elem = protractor_1.element(protractor_1.by.id(id));
        config_1.waitForEl(elem);
        protractor_1.browser.executeScript('arguments[0].click()', elem);
    };
    Helper.prototype.clickOnElement = function (element) {
        config_1.waitForEl(element);
        protractor_1.browser.executeScript('arguments[0].click()', element);
    };
    return Helper;
}());
exports.Helper = Helper;
