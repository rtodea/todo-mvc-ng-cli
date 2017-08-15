import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('tdm-root h1')).getText();
  }

  getInput() {
    return element(by.tagName('input'));
  }
}
