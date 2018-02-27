'use strict';

var Node = function(value, prevNode, nextNode) {
  this.value = value;
  this.prevNode = prevNode || this;
  this.nextNode = nextNode || this;
}

var LinkedList = function() {
  this.firstNode = null;
}

// 'push' inserts the value at the back of the linked list
LinkedList.prototype.push = function(value) {
  if(this.firstNode === null) {
    this.firstNode = new Node(value)
  } else {
    var lastNode = this.firstNode.prevNode;
    var newNode = new Node(value, lastNode, this.firstNode);
    lastNode.nextNode = newNode;
    this.firstNode.prevNode = newNode;
  }
}

// 'pop' removes the node at the back of the linked list
LinkedList.prototype.pop = function() {
  if(this.firstNode === null) {return null}
  var oldLastNode = this.firstNode.prevNode;
  var newLastNode = oldLastNode.prevNode;
  this.firstNode.prevNode = newLastNode;
  newLastNode.nextNode = this.firstNode;

  return oldLastNode.value;
}

// 'shift' removes the value at the front of the linked list
LinkedList.prototype.shift = function() {
  if(this.firstNode === null) {return null}
  var oldFirstNode = this.firstNode;
  var newFirstNode = oldFirstNode.nextNode;
  var lastNode = this.firstNode.prevNode;

  this.firstNode = newFirstNode;
  this.firstNode.prevNode = lastNode;
  lastNode.nextNode = this.firstNode;

  return oldFirstNode.value;
}

// 'unshift' inserts a value at the front of the linked list
LinkedList.prototype.unshift = function(value) {
  if(this.firstNode === null) {
    this.firstNode = new Node(value);
  } else {
    var oldFirstNode = this.firstNode;
    var lastNode = oldFirstNode.prevNode;
    var newFirstNode = new Node(value, lastNode, oldFirstNode.nextNode);

    oldFirstNode.prevNode = newFirstNode;
    lastNode.nextNode = newFirstNode;
    this.firstNode = newFirstNode;
  }
}

module.exports = LinkedList;