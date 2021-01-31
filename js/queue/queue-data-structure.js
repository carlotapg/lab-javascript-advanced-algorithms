class QueueDataStructure {
  constructor() {
    this.queueControl = [];
    this.MAX_SIZE = 10;
  }

  display() {
    return this.queueControl;
  }

  canEnqueue() {
    if (this.queueControl.length < this.MAX_SIZE) {
      return true;
    }
    return false;
  }

  isEmpty() {
    if (this.queueControl.length === 0) {
      return true;
    }
    return false;
  }

  enqueue(item) {
    if (this.canEnqueue() === false) {
      return "Queue Overflow";
    } else {
      this.queueControl.unshift(item);
      return this.display();
    }
  }

  dequeue() {
    if (this.isEmpty() === true) {
      return "Queue Underflow";
    } else return this.queueControl.pop();
  }
}
