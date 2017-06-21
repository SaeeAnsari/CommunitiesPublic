import { CommunitiesPublicPage } from './app.po';

describe('communities-public App', () => {
  let page: CommunitiesPublicPage;

  beforeEach(() => {
    page = new CommunitiesPublicPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
