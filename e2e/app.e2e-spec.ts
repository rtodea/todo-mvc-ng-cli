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
});
