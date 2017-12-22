import { MyFichePage } from './app.po';

describe('my-fiche App', () => {
  let page: MyFichePage;

  beforeEach(() => {
    page = new MyFichePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
