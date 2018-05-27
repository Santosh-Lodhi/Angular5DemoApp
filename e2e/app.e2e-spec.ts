import { Angular5DemoAppPage } from './app.po';

describe('angular5-demo-app App', function() {
  let page: Angular5DemoAppPage;

  beforeEach(() => {
    page = new Angular5DemoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
