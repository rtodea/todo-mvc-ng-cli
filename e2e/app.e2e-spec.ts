import { AppPage } from './app.po';

describe('todo-mvc-ng-cli App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should "todos" as title', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('todos');
  });

  it('should have an input with "What needs to be done?" question', () => {
    const input = page.getInput();
    const expectedQuestion = 'What needs to be done?';
    expect(input.getAttribute('placeholder')).toEqual(expectedQuestion);
  });
});
