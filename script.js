
class Node {
    constructor(data) {
        this.data = data;
        this.leftChild = null;
        this.rightChild = null;
    }
}


class Tree {
    constructor(arr) {
        let s = new Set(arr);
        let array = [...s];
        // Sort array
        array.sort(function(a, b){return a-b});
        this.root = buildTree(array, 0, array.length - 1);
    }
}

function buildTree(array, start, end) { 
    if (start > end) {
        return null;
    } 
    // Find middle element of array
    let mid = Math.floor((start + end) / 2);
    // Set root of BST
    let root = new Node(array[mid]);
    // Recursively assign the left child
    root.leftChild = buildTree(array, start, mid - 1);
    // Recursively assign the right child
    root.rightChild = buildTree(array, mid + 1, end)
    // Return the finished BST
    return root;
}

const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node === null) {
        return;
    }
    if (node.rightChild !== null) {
        prettyPrint(node.rightChild, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.leftChild !== null) {
        prettyPrint(node.leftChild, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
};
// Function for inserting values
function insert(currNode, data) {
    // Set current node to the root of the tree
    let currentNode = currNode;
    // Add the new node if the current node is null
    if (currentNode === null) {
        return new Node(data);
    }
    // Check if we need to go right or left
    if(data > currentNode.data) {
        // We need to go right xd
        currentNode.rightChild = insert(currentNode.rightChild, data);
    }
    if (data < currentNode.data) {
        // We need to go left xd
        currentNode.leftChild =  insert(currentNode.leftChild, data);
    }
    return currentNode;
}

// Function for deleting values
function deleteItem(currNode, data) {
    // Base Case for recursive fufnction
    if (currNode === null) {
        return currNode;
    }

    if (currNode.data > data) {
        currNode.leftChild = deleteItem(currNode.leftChild, data);
    } else if (currNode.data < data) {
        currNode.rightChild = deleteItem(currNode.rightChild, data);
    } else {
        // When the currNode's data matches the inputed data
        if (currNode.leftChild === null) {
            return currNode.rightChild;
        }
        if (currNode.rightChild === null) {
            return currNode.leftChild;
        }

        let findSucessor = (currNode) => {
            current = currNode.rightChild;
            while (current !== null && current.leftChild !== null) {
                current = current.leftChild;
            }
            return current;
        }
        let successor = findSucessor(currNode);
        currNode.data = successor.data;
        currNode.rightChild = deleteItem(currNode.rightChild, successor.data)
    }
    return currNode;

}

function find(currNode, value) {
    if (currNode === null) {
        return null;
    }
    if (currNode.data === value) {
        return currNode;
    }
    if (value > currNode.data) {
        currNode = currNode.rightChild;
        return find(currNode, value);
    }
    if (value < currNode.data) {
        currNode = currNode.leftChild;
        return find(currNode, value);
    } 
}

function levelOrder(callback, root) {
    // Throw error if the user inputs something other than a function as a callback
    if (typeof callback !== 'function') {
        throw new Error("You must input a callback function!");
    }
    // initialize the que
    let queue = []
    // push the root node
    queue.push(root);

    while (queue.length > 0) {
        // assign current to the first element of the queue
        let current = queue.shift();
        callback(current);
        if (current.leftChild !== null) {
            queue.push(current.leftChild)
        }
        if (current.rightChild !== null) {
            queue.push(current.rightChild);
        }
    }
}

function preOrder(callback, root) {
// The order of preOrder is: <root> <left subtree> <right subtree>
    // Throw error if the user inputs something other than a function as a callback
    if (typeof callback !== 'function') {
        throw new Error("You must input a callback function!");
    }
    if (root === null) {
        return
    }
    callback(root);
    preOrder(callback, root.leftChild);
    preOrder(callback, root.rightChild);
}

function inOrder(callback, root) {
    // The order of inOrder is: <left subtree> <root> <right subtree>
    // Throw error if the user inputs something other than a function as a callback
    if (typeof callback !== 'function') {
        throw new Error("You must input a callback function!");
    }
    if (root === null) {
        return
    }
    inOrder(callback, root.leftChild);
    callback(root);
    inOrder(callback, root.rightChild);
}

function postOrder(callback, root) {
// The order of postOrder is: <left subtree> <right subtree> <root>
    // Throw error if the user inputs something other than a function as a callback
    if (typeof callback !== 'function') {
        throw new Error("You must input a callback function!");
    }
    if (root === null) {
        return
    }
    postOrder(callback, root.leftChild);
    postOrder(callback, root.rightChild);
    callback(root);
}

function height(value, root) {
    // Use external function to find the inputed value
    let node = find(root, value)
    if (node === null) {
        return null;
    }
    return getHeight(node);
}

function getHeight(node) {
    if (node === null) {
        return -1;
    }

    let leftHeight = getHeight(node.leftChild);
    let rightHeight = getHeight(node.rightChild);

    return 1 + Math.max(leftHeight, rightHeight);
}

function depth(value, root) {
    let depth = 0;
    let node = root;
    while (node.data !== value) {
        if (value < node.data) {
            node = node.leftChild;
            depth++;
        } else if (value > node.data) {
            node = node.rightChild;
            depth++;
        }
        if (node === null) {
            return null;
        }
    }
    return depth;
}

function isBalanced(root) {
    if (root === null) {
        return true;
    }
    let heightLeft = getHeight(root.leftChild);
    let heightRight = getHeight(root.rightChild);
    let diff = Math.abs(heightLeft - heightRight);
    if (diff > 1) {
        return false;
    } else {
        return isBalanced(root.leftChild) && isBalanced(root.rightChild);
    }
}

function rebalance(root) {
    // get arr of tree
    let arr = [];
    inOrder(node => arr.push(node.data), root);
    // Now provide this array to buildTree function
    let bst = new Tree(arr);
    return bst;
}

function printer(node) {
    console.log(node.data);
}

let myArray = [17, 20, 71, 32, 55, 77, 68, 60, 43, 51, 4, 80, 42, 41, 57, 67, 75, 27, 53, 18, 50, 61, 21, 47, 52, 88, 87, 26, 36, 40, 29, 35, 76, 38, 86, 16, 2, 6, 9, 33, 11, 84, 66, 25, 83, 31, 3, 90, 13, 73]
let binarySearchTree = new Tree(myArray);
console.log(isBalanced(binarySearchTree.root));  // true
// print out items in level order, pre, post, and in order
// levelOrder(printer, binarySearchTree.root);
// preOrder(printer, binarySearchTree.root);
// postOrder(printer, binarySearchTree.root);
// inOrder(printer, binarySearchTree.root);

// unbalance tree
insert(binarySearchTree.root, 121);
insert(binarySearchTree.root, 132);
insert(binarySearchTree.root, 128);
insert(binarySearchTree.root, 156);
// check to see if indeed is not balanced
console.log(isBalanced(binarySearchTree.root)); // false
let newBinarySearchTree = rebalance(binarySearchTree.root);
console.log(isBalanced(newBinarySearchTree.root)); // true
