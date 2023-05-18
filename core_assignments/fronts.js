// 1. ADD FRONT

// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

// Examples:

// SLL1 = new SLL()
// SLL1.addFront(18) => Node { data: 18, next: null }
// SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }


// 2. REMOVE FRONT

// Write a method to remove the head node and return the new list head node. If the list is empty, return null.

// Examples:

// SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
// SLL1.removeFront() => Node { data: 18, next: null }


// 3. FRONT

// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

// Examples:

// SLL1.front() => 18
// SLL1.removeFront() => null
// SLL1.front() => null

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    addFront(value) {
        // Creating a new node object with the value provided
        let new_node = new Node(value);
        // Checking to see if the current list does not have a head node (if the list is empty)
        // If the list is empty, place the new node as the head
        if(!this.head) {
            this.head = new_node;
            return this;
        }
        // If the list is not empty, assign the head to be the next node to the new node
        new_node.next = this.head;
        // Then finally assign the new_node to be the new head of the list
        this.head = new_node;
        return this;
    }

    removeFront() {
        let removedHead = this.head;
        if(!this.head) {
            return null;
        }
        this.head = removedHead.next;
        return this;
    }

    front() {
        if(!this.head) {
            return null;
        }
        return this.head.value;
    }
}

let SLL1 = new SLL();

SLL1.addFront(18);
SLL1.addFront(5);
SLL1.addFront(73);
console.log(SLL1);

SLL1.removeFront();
SLL1.removeFront()
console.log(SLL1);

SLL1.front() // => 18
console.log(SLL1);
SLL1.removeFront() // => null
console.log(SLL1);
SLL1.front() // => null
console.log(SLL1);