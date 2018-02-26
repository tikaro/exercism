'use strict';

var Node = function(value, prevNode, nextNode) {
  this.value = value;
  this.prevNode = prevNode || this;
  this.nextNode = nextNode || this;
}

var LinkedList = function() {
  this.firstNode = null;
}

/* "Push" inserts the value at the back of the linked list */
LinkedList.prototype.push = function(value) {
  if(this.firstNode === null) {
    this.firstNode = new Node(value)
  } else {
    var lastNode = this.firstNode.prevNode;
    var newNode = new Node(value, lastNode, this.firstNode)
    lastNode.nextNode = newNode;
    this.firstNode.prevNode = newNode;
  }
}

/* 'pop' removes the value at the back of the linked list */
LinkedList.prototype.pop = function() {
  var lastNode = this.firstNode.prevNode;
  var secondToLastNode = lastNode.prevNode;
  this.firstNode.prevNode = secondToLastNode;
  secondToLastNode.nextNode = this.firstNode;
  return lastNode.value;
}

module.exports = LinkedList;