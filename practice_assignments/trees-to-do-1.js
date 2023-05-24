class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    // add methods here...
    add(val) {
        // your code here
        // create BTNode with this value
        const newNode = new BTNode(val);
        // run check to see if newNode can be made into the root
        if(this.root === null) {
            // make this.root = newNode
            this.root = newNode;
        } else {
            // we have to make it so the newNode is added to either the left or the right
            // we can add this.root and newNode into a function that checks where to place newNode
            this.addNode(this.root, newNode);
        }
    }
    
    // connect it at appropriate place in the tree
    // by passing the 2 previous values to check where to add newNode
    addNode(node, newNode) {
        // first check if newNode is less than node to see if we add newNode to the LEFT
        if(newNode.val < node.val) {
            // need to check if newNode can be added here
            if(node.left === null) {
                // make node.left = newNode
                node.left = newNode;
            } else {
                // if its not null and equals a value, add node.left and newNode into the addNode function
                this.addNode(node.left, newNode);
            }
            // Run another check to see if newNode is placed to the RIGHT
        } else {
            if(node.right === null) {
                //make node.right = newNode
                node.right = newNode;
            } else {
                // add node.right and newNode into addNode function
                this.addNode(node.right, newNode);
            }
        }
    }

    contains(val) {
        //check if tree contains a value
        // make checked value this.root
        let checked_value = this.root;
        // run a loop while checked_value is true
        while(checked_value) {
            // if checked_value === val return true
            if(checked_value.val === val) {
                return true;
            }
            // run check to see if checked_value < val
            if(val < checked_value.val) {
                if(!checked_value.left) {
                    return false;
                }
                checked_value = checked_value.left;
            } else {
                if(!checked_value.right) {
                    return false;
                }
                checked_value = checked_value.right;
            }
        }
        return false;
    }

    min() {
        //return smallest value in tree
        let checked_value = this.root
        let min = this.root.val;
        //we got to run a check here
        //we can loop
        while(checked_value.left) {
            if(checked_value.left.val < min) {
                min = checked_value.left.val;
            }
            checked_value = checked_value.left;
        }
        return min;
    }

    max() {
        let checked_value = this.root
        let max = this.root.val;

        while(checked_value.right) {
            if(checked_value.right.val > max) {
                max = checked_value.right.val;
            }
            checked_value = checked_value.right;
        }
        return max;
    }

    isEmpty() {
        if(this.root === null) {
            return true;
        } else {
            return false;
        }
    }
}

const BST1 = new BST();

BST1.add(10)
BST1.add(5)
BST1.add(15)
BST1.add(3)
BST1.add(7)
BST1.add(12)
BST1.add(17);
console.log(BST1);

console.log(BST1.contains(15));
console.log(BST1.contains(5));
console.log(BST1.min());
console.log(BST1.max());
console.log(BST1.isEmpty());

const emptyTree = new BST();
console.log(emptyTree.isEmpty());




// Create an add(val) method on the BST object to add new value to the tree. This entails creating a BTNode with this value and connecting it at the appropriate place in the tree. Unless specified otherwise, BSTs can contain duplicate values.