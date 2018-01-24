import { browser, by, element } from 'protractor';
import {
  byCss,
  byId,
  waitForCss,
  waitForEl,
  waitForId,
  waitForUrl,
  waitUntilClickable,
  waitUntilNotVisible,
  waitUntilVisible
} from './config';

export class Helper {

  getInputValue(id) {
    waitForId(id);
    const input = element(by.css('#' + id + ' input'));
    return input.getAttribute('value');
  }

  chooseOption(id) {
    waitForId(id);
    let button = element(by.id(id));
    waitUntilClickable(button);
    button.click();
  }


  clickFirstElement(css) {
    waitForCss(css);
    let el = element.all(by.css(css)).get(0);
    waitUntilClickable(el);
    el.click();
  }

  clickOnElementByEl(el, timeout = 15000) {
    waitUntilClickable(el, timeout);
    el.click();
  }

  clickOnElementById(id: string, timeout = 10000) {
    waitForId(id, timeout);
    let elem = element(by.id(id));
    waitUntilClickable(elem, timeout);
    this.clickButton(id);
  }


  getCheckedRadioButtonValue() {
    return byCss('input[type=\'radio\']:checked').getAttribute('value');
  }

  countElements(css) {
    return element.all(by.css(css)).count();
  }

  enterMdInputText(id, text) {
    waitForId(id);
    const input = element(by.css('#' + id + ' input'));
    input.clear().then(() => input.sendKeys(text));
    return input;
  }

  enterInputText(id, text) {
    waitForId(id);
    const input = element(by.css('#' + id));
    input.clear().then(() => input.sendKeys(text));
    return input;
  }

  clickButton(id) {
    const elem = element(by.id(id));
    waitForEl(elem);
    browser.executeScript('arguments[0].click()', elem);
  }
}
