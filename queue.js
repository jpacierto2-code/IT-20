class Queue {
    constructor() {
        this.data = {};
        this.frontIndex = 0;
        this.readIndex = -1;
    }
    enqueue(element) {
        this.rearIndex++;
        this.data[this.rearIndex] = element;
    }
    traverse() {
        let output = "";    
        for (let i = this.frontIndex; i <= this.rearIndex; i++) {
            output += this.data[i] + " ";
        }
        console.log(output);
    }
    is_empty() {
        return this.rearIndex < this.frontIndex;
    }
    front() {
        if (this.is_empty()) {
            return "Queue is empty";
        }
        return this.data[this.frontIndex];
    }
    size() {
        return this.rearIndex - this.frontIndex + 1;
    }
    dequeue() {
        if (this.is_empty()) {
            return "Underflow";
        }
        let element = this.data[this.frontIndex];
        delete this.data[this.frontIndex];
        this.frontIndex++;
        return element;
    }
}
     
queue.enqueue(4);
queue.enqueue(2);
queue.enqueue(3);
//queue.traverse(); 
console.log(queue.traverse());
console.log("the front value " + queue.dequeue() + " is dequeued");
console.log(queue.traverse());