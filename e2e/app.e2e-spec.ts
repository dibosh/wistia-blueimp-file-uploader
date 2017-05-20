import { NgBlueimpPage } from './app.po';

describe('ng-blueimp App', () => {
  let page: NgBlueimpPage;

  beforeEach(() => {
    page = new NgBlueimpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
