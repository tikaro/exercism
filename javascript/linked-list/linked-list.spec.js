/* eslint max-statements: 0 */

var LinkedList = require('./linked-list');

describe('LinkedList', function () {
  it('push/pop', function () {
    var list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    expect(list.pop()).toBe(10);
  });
  it('push/shift', function () {
    var list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.shift()).toBe(10);
    expect(list.shift()).toBe(20);
  });
  it.only('unshift/shift', function () {
    var list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    expect(list.shift()).toBe(20);
    expect(list.shift()).toBe(10);
  });
  xit('unshift/pop', function () {
    var list = new LinkedList();
    list.unshift(10);
    list.unshift(20);
    expect(list.pop()).toBe(10);
    expect(list.pop()).toBe(20);
  });
  xit('example', function () {
    var list = new LinkedList();
    list.push(10);
    list.push(20);
    expect(list.pop()).toBe(20);
    list.push(30);
    expect(list.shift()).toBe(10);
    list.unshift(40);
    list.push(50);
    expect(list.shift()).toBe(40);
    expect(list.pop()).toBe(50);
    expect(list.shift()).toBe(30);
  });
});
