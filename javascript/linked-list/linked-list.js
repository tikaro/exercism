'use strict';

/* eslint no-underscore-dangle: 0 */

var Node = function(value, nextNode, prevNode) {
  this.value = value;
  this.nextNode = nextNode || this;
  this.prevNode = prevNode || this;
}

var LinkedList = function() {
  this.firstNode = null;
}

/* 'push' inserts the value at the back of the linked list */
LinkedList.prototype.push = function(value) {
  if (this.firstNode === null) {
    this.firstNode = new Node(value);
  } else {
    var lastNode = this.firstNode.prevNode;
    var n = new Node(value, this.firstNode, lastNode);
    lastNode.nextNode = n;
    this.firstNode.prevNode = n;
  }
};

/* 'unshift' inserts the value at the front of the linked list */
LinkedList.prototype.unshift = function(value) {
  this.push(value);
  this.firstNode = this.firstNode.prevNode;
};

/* 'pop' removes the value at the back of the linked list */
LinkedList.prototype.pop = function() {
  if (this.firstNode === null) {return null;}
  this.firstNode = this.firstNode.prevNode;
  return this.shift();
};

/* 'shift' removes the value at the front of the linked list */
LinkedList.prototype.shift = function() {
  var value = this.firstNode.value;
  var front = this.firstNode.nextNode;
  var lastNode = this.firstNode.prevNode;
  if (front === this.firstNode) {
    this.firstNode = null;
  } else {
    front.prevNode = lastNode;
    lastNode.nextNode = front;
    this.firstNode = front;
  }
  return value;
};

/* 'count' returns the length of the linked list */
LinkedList.prototype.count = function() {
  if (this.firstNode === null) {
    return 0;
  } else if (this.firstNode.nextNode === this.firstNode) {
    return 1;
  }
  this.firstNode.nextNode = this.firstNode.nextNode.nextNode;
  return this.count() + 1;
};

/* not yet sure what 'delete' does */
LinkedList.prototype.delete = function(match) {
  if (this.firstNode.nextNode === this.firstNode && this.firstNode.value === match) {
    this.firstNode = null;
  } else if (this.firstNode.nextNode.value === match) {
    this.firstNode.nextNode = this.firstNode.nextNode.nextNode;
  } else {
    this.firstNode = this.firstNode.nextNode;
    return this.delete(match);
  }
};

module.exports = LinkedList;