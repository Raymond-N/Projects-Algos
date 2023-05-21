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
        let new_node = new Node(value);

        if(!this.head) {
            this.head = new_node;
            return this;
        }

        new_node.next = this.head;

        this.head = new_node;

        return this;
    }

    display() {
        if (this.head === null) {
            return 'List is empty';
        }

        let current = this.head;
        const values = [];

        while (current !== null) {
            values.push(String(current.data));
            current = current.next;
        }

        return values.join(', ');
    }
}

// Examples

const SLL1 = new SLL()

console.log(SLL1.addFront(76)); //=> Node { data: 76, next: null }
console.log(SLL1.addFront(2)); //=> Node { data: 2, next: Node { data: 76, next: null } }
console.log(SLL1.display()); //=> "2, 76"
console.log(SLL1.addFront(11.41)); //=> Node { data: 11.41, next: Node { data: 2, next: Node { data: 76, next: null } } }
console.log(SLL1.display()); //=> "11.41, 2, 76"