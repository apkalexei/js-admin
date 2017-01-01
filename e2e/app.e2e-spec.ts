import { DXAdminPage } from './app.po';

describe('dxadmin App', function() {
  let page: DXAdminPage;

  beforeEach(() => {
    page = new DXAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
