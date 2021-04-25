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

  it(`Should return output without discount rate for province 'ON' with 1 item, $1 unitPrice as total cost $1.13`, () => {
    const result = lib.calculateTotalPrice(1, 1, 'ON');
    expect(result).toBeCloseTo(1.13);
  });

  it(`Should return output without discount rate for province 'QC' with 1 item, $1 unitPrice as total cost $1.15`, () => {
    const result = lib.calculateTotalPrice(1, 1, 'QC');
    expect(result).toBeCloseTo(1.15);
  });

  it(`Should return output without discount rate for province 'MI' with 1 item, $1 unitPrice as total cost $1.06`, () => {
    const result = lib.calculateTotalPrice(1, 1, 'MI');
    expect(result).toBeCloseTo(1.06);
  });

  it(`Should return output without discount rate for province 'DE' with 1 item, $1 unitPrice as total cost $1`, () => {
    const result = lib.calculateTotalPrice(1, 1, 'DE');
    expect(result).toBeCloseTo(1);
  });

  //With discount rate 3%

  it(`Should return output with discount rate 3% for province 'AB' with 1000 items, $1 unitPrice as total cost $1018.50`, () => {
    const result = lib.calculateTotalPrice(1000, 1, 'AB');
    expect(result).toBeCloseTo(1018.5);
  });

  it(`Should return output with discount rate 3% for province 'ON' with 1000 items, $1 unitPrice as total cost $1096.10`, () => {
    const result = lib.calculateTotalPrice(1000, 1, 'ON');
    expect(result).toBeCloseTo(1096.1);
  });

  it(`Should return output with discount rate 3% for province 'QC' with 1000 items, $1 unitPrice as total cost $1115.26`, () => {
    const result = lib.calculateTotalPrice(1000, 1, 'QC');
    expect(result).toBeCloseTo(1115.26);
  });

  it(`Should return output with discount rate 3% for province 'MI' with 1000 items, $1 unitPrice as total cost $1028.2`, () => {
    const result = lib.calculateTotalPrice(1000, 1, 'MI');
    expect(result).toBeCloseTo(1028.2);
  });

  it(`Should return output with discount rate 3% for province 'DE' with 1000 items, $1 unitPrice as total cost $970`, () => {
    const result = lib.calculateTotalPrice(1000, 1, 'DE');
    expect(result).toBeCloseTo(970);
  });

  //With discount rate 5%

  it(`Should return output with discount rate 5% for province 'AB' with 5000 items, $1 unitPrice as total cost $4987.5`, () => {
    const result = lib.calculateTotalPrice(5000, 1, 'AB');
    expect(result).toBeCloseTo(4987.5);
  });

  it(`Should return output with discount rate 5% for province 'ON' with 5000 items, $1 unitPrice as total cost $5367.5`, () => {
    const result = lib.calculateTotalPrice(5000, 1, 'ON');
    expect(result).toBeCloseTo(5367.5);
  });

  it(`Should return output with discount rate 5% for province 'QC' with 5000 items, $1 unitPrice as total cost $5461.31`, () => {
    const result = lib.calculateTotalPrice(5000, 1, 'QC');
    expect(result).toBeCloseTo(5461.31);
  });

  it(`Should return output with discount rate 5% for province 'MI' with 5000 items, $1 unitPrice as total cost $5035`, () => {
    const result = lib.calculateTotalPrice(5000, 1, 'MI');
    expect(result).toBeCloseTo(5035);
  });

  it(`Should return output with discount rate 5% for province 'AB' with 5000 items, $1 unitPrice as total cost $4750`, () => {
    const result = lib.calculateTotalPrice(5000, 1, 'DE');
    expect(result).toBeCloseTo(4750);
  });

  //With discount rate 7%

  it(`Should return output with discount rate 7% for province 'AB' with 7000 items, $1 unitPrice as total cost $6835.5`, () => {
    const result = lib.calculateTotalPrice(7000, 1, 'AB');
    expect(result).toBeCloseTo(6835.5);
  });

  it(`Should return output with discount rate 7% for province 'ON' with 7000 items, $1 unitPrice as total cost $7356.3`, () => {
    const result = lib.calculateTotalPrice(7000, 1, 'ON');
    expect(result).toBeCloseTo(7356.3);
  });

  it(`Should return output with discount rate 7% for province 'QC' with 7000 items, $1 unitPrice as total cost $7484.87`, () => {
    const result = lib.calculateTotalPrice(7000, 1, 'QC');
    expect(result).toBeCloseTo(7484.87);
  });

  it(`Should return output with discount rate 7% for province 'MI' with 7000 items, $1 unitPrice as total cost $6900.6`, () => {
    const result = lib.calculateTotalPrice(7000, 1, 'MI');
    expect(result).toBeCloseTo(6900.6);
  });

  it(`Should return output with discount rate 7% for province 'DE' with 7000 items, $1 unitPrice as total cost $6510`, () => {
    const result = lib.calculateTotalPrice(7000, 1, 'DE');
    expect(result).toBeCloseTo(6510);
  });

  //With discount rate 10%

  it(`Should return output with discount rate 10% for province 'AB' with 10000 items, $1 unitPrice as total cost $9450`, () => {
    const result = lib.calculateTotalPrice(10000, 1, 'AB');
    expect(result).toBeCloseTo(9450);
  });

  it(`Should return output with discount rate 10% for province 'ON' with 10000 items, $1 unitPrice as total cost $10170`, () => {
    const result = lib.calculateTotalPrice(10000, 1, 'ON');
    expect(result).toBeCloseTo(10170);
  });

  it(`Should return output with discount rate 10% for province 'QC' with 10000 items, $1 unitPrice as total cost $10347.75`, () => {
    const result = lib.calculateTotalPrice(10000, 1, 'QC');
    expect(result).toBeCloseTo(10347.75);
  });

  it(`Should return output with discount rate 10% for province 'AB' with 10000 items, $1 unitPrice as total cost $9540`, () => {
    const result = lib.calculateTotalPrice(10000, 1, 'MI');
    expect(result).toBeCloseTo(9540);
  });

  it(`Should return output with discount rate 10% for province 'AB' with 10000 items, $1 unitPrice as total cost $9000`, () => {
    const result = lib.calculateTotalPrice(10000, 1, 'DE');
    expect(result).toBeCloseTo(9000);
  });
});
