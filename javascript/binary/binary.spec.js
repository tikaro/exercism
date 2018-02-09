var Binary = require('./binary');

describe('binary', function () {
  it('given 0, returns decimal 0', function () {
    expect(new Binary('0').toDecimal()).toEqual(0);
  });

  it('given 1, returns decimal 1', function() {
    expect(new Binary('1').toDecimal()).toEqual(1);
  });

  it('given 10, returns decimal 2', function () {
    expect(new Binary('10').toDecimal()).toEqual(2);
  });

  it('given 11, returns decimal 3', function() {
    expect(new Binary('11').toDecimal()).toEqual(3);
  })

  it('given 100, returns decimal 4', function() {
    expect(new Binary('100').toDecimal()).toEqual(4);
  })

  it('given 1001, returns decimal 9', function() {
    expect(new Binary('1001').toDecimal()).toEqual(9);
  })

  it('given 11010, returns decimal 26', function() {
    expect(new Binary('11010').toDecimal()).toEqual(26);
  })

  it('given 10001101000, returns decimal 1128', function() {
    expect(new Binary('10001101000').toDecimal()).toEqual(1128);
  })

  it('given 00011111, returns decimal 31', function() {
    expect(new Binary('00011111').toDecimal()).toEqual(31);
  })

  it('given invalid inputs, returns decimal 0', function () {
    expect(new Binary('carrot').toDecimal()).toEqual(0);
    expect(new Binary('012').toDecimal()).toEqual(0);
    expect(new Binary('10nope').toDecimal()).toEqual(0);
    expect(new Binary('nope10').toDecimal()).toEqual(0);
    expect(new Binary('10nope10').toDecimal()).toEqual(0);
  })

})