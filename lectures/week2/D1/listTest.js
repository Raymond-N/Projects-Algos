class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

node1 = new Node(10);
// console.log(node1.data);

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    push(data) {
        if (this.head === null) {
            this.head = new Node(data);
            return;
        }
        let pointer = this.head;
        while (pointer.next !== null) {
            pointer = pointer.next;
        }
        pointer.next = new Node(data);
    }

    pop() {
        if (this.head === null) {
            return null;
        }
        let pointer = this.head;
        if (pointer.next === null) {
            this.head = null;
            return pointer.data;
        }
        while (pointer.next.next !== null) {
            pointer = pointer.next;
        }
        const temp = pointer.next.data;
        pointer.next = null;
        return temp;
    }

    // possible answer? check it out on platform after
    pushToFront(data) {
        if (this.head === null) {
            this.head = new Node(data);
            return;
        }
        const temp = this.head;
        this.head = new Node(data);
        this.head.next = temp;
    }

    popFront() {
        if (this.head === null) {
            return null;
        }
        const temp = this.head.data;
        this.head = this.head.next;
        return temp;
    }
}

myList1 = new SinglyLinkedList();
myList2 = new SinglyLinkedList(node1);
myList2.push(15);
console.log(myList2);