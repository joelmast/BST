
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
    let root = new Node(array[mid]);
    root.leftChild = buildTree(array, start, mid - 1);
    root.rightChild = buildTree(array, mid + 1, end)
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

let binarySearchTree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
console.log(binarySearchTree.root);
prettyPrint(binarySearchTree.root);