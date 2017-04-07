
import { TorneosUnalAppPage } from './app.po';

describe('torneos-unal-app App', () => {
  let page: TorneosUnalAppPage;

  beforeEach(() => {
    page = new TorneosUnalAppPage();

  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
