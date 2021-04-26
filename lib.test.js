const lib = require('./lib');

describe('calculateTotalPrice', () => {
  // Parameters validation test
  it('Should throw if numberOfItems is falsy or negative or not a number', () => {
    // Falsy values
    const args = [null, undefined, NaN, '', 0, false, -1, '1'];
    args.forEach((a) => {
      expect(() => lib.calculateTotalPrice(a, 1, 'a')).toThrow();
    });
  });

  it('Should throw if unitPrice is falsy or negative or not a number', () => {
    const args = [null, undefined, NaN, '', 0, false, -1, '1'];
    args.forEach((a) => {
      expect(() => lib.calculateTotalPrice(1, a, 'a')).toThrow();
    });
  });

  it('Should throw if province is falsy or is not a string', () => {
    const args = [null, undefined, NaN, '', 0, false, 1];
    args.forEach((a) => {
      expect(() => lib.calculateTotalPrice(1, 1, a)).toThrow();
    });
  });

  it('Should throw if province input not exists', () => {
    expect(() => lib.calculateTotalPrice(1, 1, 'a')).toThrow();
  });

  // Without discount rate

  it(`Should return output without discount rate for province 'AB' with 1 item, $1 unitPrice as total cost $1.05`, () => {
    const result = lib.calculateTotalPrice(1, 1, 'AB');
    expect(result).toBeCloseTo(1.05);
  });

  //With discount rate 3%

  it(`Should return output with discount rate 3% for province 'AB' with 1000 items, $1 unitPrice as total cost $1018.50`, () => {
    const result = lib.calculateTotalPrice(1000, 1, 'AB');
    expect(result).toBeCloseTo(1018.5);
  });

  //With discount rate 5%

  it(`Should return output with discount rate 5% for province 'AB' with 5000 items, $1 unitPrice as total cost $4987.5`, () => {
    const result = lib.calculateTotalPrice(5000, 1, 'AB');
    expect(result).toBeCloseTo(4987.5);
  });

  //With discount rate 7%

  it(`Should return output with discount rate 7% for province 'AB' with 7000 items, $1 unitPrice as total cost $6835.5`, () => {
    const result = lib.calculateTotalPrice(7000, 1, 'AB');
    expect(result).toBeCloseTo(6835.5);
  });

  //With discount rate 10%

  it(`Should return output with discount rate 10% for province 'AB' with 10000 items, $1 unitPrice as total cost $9450`, () => {
    const result = lib.calculateTotalPrice(10000, 1, 'AB');
    expect(result).toBeCloseTo(9450);
  });

});
