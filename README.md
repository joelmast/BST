# Binary Search Tree (BST)

This project is an implementation of a Binary Search Tree (BST) in JavaScript.

## What is a Binary Search Tree?

A binary search tree is a data structure in which each node has at most two children, referred to as the left child and the right child. For each node, all elements in its left subtree are less than the node's value, and all elements in its right subtree are greater than the node's value. This property allows for efficient searching, insertion, and deletion of elements.

## Features

This implementation includes the following features:

*   **Node Class:** Represents a node in the tree.
*   **Tree Class:** Represents the binary search tree itself.
    *   The constructor takes an array, removes duplicates, sorts it, and builds a balanced binary search tree.
*   **`buildTree` function:** Recursively builds a balanced binary search tree from a sorted array.
*   **`insert(data)`:** Inserts a new value into the tree.
*   **`deleteItem(data)`:** Deletes a value from the tree.
*   **`prettyPrint()`:** Prints a visually structured representation of the tree to the console.
*   **`find(data)`:** Searches for and returns the node containing the given value.
*   **`levelOrder(callback)`:** Traverses the tree in breadth-first level order and calls the given callback on each node.
*   **`inOrder(callback)`:** Traverses the tree in in-order (left, root, right) depth-first order.
*   **`preOrder(callback)`:** Traverses the tree in pre-order (root, left, right) depth-first order.
*   **`postOrder(callback)`:** Traverses the tree in post-order (left, right, root) depth-first order.
*   **`height(value)`:** Returns the height of the node containing the given value.
*   **`depth(value)`:** Returns the depth of the node containing the given value.
*   **`isBalanced()`:** Checks if the tree is height-balanced.
*   **`rebalance()`:** Rebuilds the tree into a balanced tree using in-order traversal.
*   **`prettyPrint()`:** Prints a visually structured representation of the tree to the console.



## How to Use

1.  Open the `script.js` file.
2.  At the bottom of the file, you can see an example of how to create a new `Tree` object with an array of numbers.
3.  You can modify the array to create a BST with your own values.
4.  The `prettyPrint` function is called to display the initial tree, after an insertion, and after a deletion to demonstrate the functionality.
5.  Open the HTML file in your browser and check the console to see the output.