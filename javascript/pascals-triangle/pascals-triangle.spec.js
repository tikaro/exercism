var Triangle = require('./pascals-triangle');

describe('Triangle', function () {
  it('with one row', function () {
    var t = new Triangle(1);
    expect(t.rows()).toEqual([[1]]);
  });
});
