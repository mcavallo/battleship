import fs from 'fs';
import path from 'path';

jest.dontMock('fs');

describe('index.html', () => {
  beforeEach(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    jest.resetModules();
  });

  it(`contains the #root element`, () => {
    expect(document.getElementById('root')).toBeTruthy();
  });
});
