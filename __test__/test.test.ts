import { checkNumber } from '@utils/checkNumber';

describe('check number', () => {
  it('number', () => {
    expect(checkNumber(1)).toBe(true);
  });
  it('not number', () => {
    expect(checkNumber(null)).toBe(false);
  });
});
