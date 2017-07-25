import { CDACLIPage } from './app.po';

describe('cda-cli App', () => {
  let page: CDACLIPage;

  beforeEach(() => {
    page = new CDACLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
