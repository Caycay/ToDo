import { ExpectedConditions as EC, ElementFinder, browser, by, element } from 'protractor';

export function byId(id: string): ElementFinder {
  return element(by.id(id));
}

export function byCss(sel: string): ElementFinder {
  return element(by.css(sel));
}

/**
 * Schedules a command to wait for a DOM element to be present and clickable up to the given amount of time.
 * @param {WebElementPromise} DOM element locator (ie. by.id, by.css, etc)
 * @param {number} ms The amount of time, in milliseconds, to sleep.
 * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
 *     when the sleep has finished.
 */
export const waitUntilClickable = (el, timeout = 5000) => {
  return browser.wait(EC.elementToBeClickable(el), timeout);
};

/**
 * Schedules a command to wait for a DOM element to be present and visible up to the given amount of time.
 * @param {WebElementPromise} DOM element locator (ie. by.id, by.css, etc)
 * @param {number} ms The amount of time, in milliseconds, to sleep.
 * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
 *     when the sleep has finished.
 */
export function waitUntilVisible(el, timeout = 5000) {
  return browser.wait(EC.visibilityOf(el), timeout);
};

/**
 * Schedules a command to wait until a DOM element to be invisible up to the given amount of time.
 * @param {WebElementPromise} DOM element locator (ie. by.id, by.css, etc)
 * @param {number} ms The amount of time, in milliseconds, to sleep.
 * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
 *     when the sleep has finished.
 */
export function waitUntilNotVisible(el, timeout = 5000) {
  return browser.wait(EC.invisibilityOf(el), timeout);
};

/**
 * Schedules a command to wait until a DOM element is not present up to the given amount of time.
 * @param {WebElementPromise} DOM element locator (ie. by.id, by.css, etc)
 * @param {number} ms The amount of time, in milliseconds, to sleep.
 * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
 *     when the sleep has finished.
 */
export function waitUntilNotPresent(el, timeout = 5000) {
  return browser.wait(EC.stalenessOf(el), timeout);
};

/**
 * Schedules a command to wait for a DOM element to be present in the DOM up to the given amount of time.
 * @param {WebElementPromise} DOM element locator (ie. by.id, by.css, etc)
 * @param {number} ms The amount of time, in milliseconds, to sleep.
 * @return {!webdriver.promise.Promise.<void>} A promise that will be resolved
 *     when the sleep has finished.
 */
export function waitForEl(el, timeout = 5000) {
  return browser.wait(EC.presenceOf(el), timeout);
}
export function waitForId(id, timeout = 5000) {
  return browser.wait(EC.presenceOf(byId(id)), timeout);
}
export function waitForCss(sel, timeout = 5000) {
  return browser.wait(EC.presenceOf(byCss(sel)), timeout);
}
export function waitForUrl(phrase, timeout = 5000) {
  return browser.wait(EC.urlContains(phrase), timeout);
}

export function clickElement(el: ElementFinder) {
  return browser.executeScript('arguments[0].click()', el);
}
