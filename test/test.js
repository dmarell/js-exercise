const LinkedList = require('../lib/linked-list')
const should = require('should');
const test = require('unit.js');

describe("Linked list", () => {
  it('Append one element', function (done) {
    const list = new LinkedList();
    list.length().should.be.exactly(0);
    list.append('value')
    list.length().should.be.exactly(1);
    done();
  });

  it('Iterate list', function (done) {
    const list = new LinkedList();
    list.append('v1')
    list.append('v2')
    list.append('v3')
    list.length().should.be.exactly(3);
    arr = [];
    for (let value of list) {
      arr.push(value)
    }
    arr.size.should.be.exactly(3);
    arr[0].should.be.exactly('v1');
    arr[1].should.be.exactly('v2');
    arr[2].should.be.exactly('v3');
    done();
  });
});
