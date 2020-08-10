const assert = require('assert');

describe('http://localhost:3000/ test', () => {
  it('should have the right title', () => {
      browser.url('http://localhost:3000/')
      expect(browser).toHaveTitle('Acoustic Offline Challenge');
  })
  it('should have right header', () => {
    browser.url('http://localhost:3000/')
    const header = $('h1=Staffordshire Terrier Pups')
    console.log(header.getText())
    console.log(header.getTagName())
    const headerTexr = header.getText()
    const headerTag = header.getTagName()
    assert.equal(headerTexr, 'Staffordshire Terrier Pups');
    assert.equal(headerTag, 'h1');
  })
  it('should display image', () => {
    browser.url('http://localhost:3000/')
    const elem = $('[data-test-id=main-image]')
    expect(elem).toBePresent()
  })
})