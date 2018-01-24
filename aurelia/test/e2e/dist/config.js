"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
function byId(id) {
    return protractor_1.element(protractor_1.by.id(id));
}
exports.byId = byId;
function byCss(sel) {
    return protractor_1.element(protractor_1.by.css(sel));
}
exports.byCss = byCss;
exports.waitUntilClickable = function (el, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(el), timeout);
};
function waitUntilVisible(el, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return protractor_1.browser.wait(protractor_1.ExpectedConditions.visibilityOf(el), timeout);
}
exports.waitUntilVisible = waitUntilVisible;
;
function waitUntilNotVisible(el, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return protractor_1.browser.wait(protractor_1.ExpectedConditions.invisibilityOf(el), timeout);
}
exports.waitUntilNotVisible = waitUntilNotVisible;
;
function waitUntilNotPresent(el, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return protractor_1.browser.wait(protractor_1.ExpectedConditions.stalenessOf(el), timeout);
}
exports.waitUntilNotPresent = waitUntilNotPresent;
;
function waitForEl(el, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(el), timeout);
}
exports.waitForEl = waitForEl;
function waitForId(id, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(byId(id)), timeout);
}
exports.waitForId = waitForId;
function waitForCss(sel, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return protractor_1.browser.wait(protractor_1.ExpectedConditions.presenceOf(byCss(sel)), timeout);
}
exports.waitForCss = waitForCss;
function waitForUrl(phrase, timeout) {
    if (timeout === void 0) { timeout = 5000; }
    return protractor_1.browser.wait(protractor_1.ExpectedConditions.urlContains(phrase), timeout);
}
exports.waitForUrl = waitForUrl;
function clickElement(el) {
    return protractor_1.browser.executeScript('arguments[0].click()', el);
}
exports.clickElement = clickElement;
