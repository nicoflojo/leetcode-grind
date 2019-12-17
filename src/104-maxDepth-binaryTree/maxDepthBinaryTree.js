// Definition of Binary Tree Node
// function TreeNode(val) {
//  this.val = val;
//  this.left = null;
//  this.right = null;
// }

// @param {TreeNode}
// @return {number}

var maxDepth = function(root) {
  if (root === null) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1; // adds +1 for every depth search
};

// Test case
// binarytree = [3, 9, 20, null, null, 15, 7];
// maxdepth(binaryTree);
// output: 3


