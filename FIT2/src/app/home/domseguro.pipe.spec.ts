import { DomseguroPipe } from './domseguro.pipe';

describe('DomseguroPipe', () => {
  it('create an instance', () => {
    const mockDomSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustHtml']);
    const pipe = new DomseguroPipe(mockDomSanitizer);
    expect(pipe).toBeTruthy();
  });
});
