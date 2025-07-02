
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
function insert(value) {
    
}

// Function for deleting values
function deleteItem(value) {

}
