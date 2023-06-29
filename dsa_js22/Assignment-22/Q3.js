//Complexity
    //Time Complexity - O(nlogn)
    //Space Complexity - O(n)

//Function to print root to leaf path for a leaf using parent nodes stored in map
function printTopToBottomPath(curr, parent)
{
    //stk = stack
	let stk = [];

	// start from leaf node and keep on pushing nodes into stack till root node is reached
	while (curr != null)
	{
		stk.push(curr);
		curr = parent.get(curr);
	}

	// Start popping nodes from stack and print them
	while (stk.length != 0)
	{
		curr = stk[stk.length-1];
		stk.pop();
		console.log(curr.data + " ");
	}
	console.log("<br>");
}
//print the leaf path
function printRootToLeaf(root)
{
	// Corner Case
	if (root == null)
		return;

	// Create an empty stack and push root to it
	let nodeStack = [];
	nodeStack.push(root);

	// Create a map to store parent pointers of binary tree nodes
	let parent = new Map();

	// parent of root is NULL
	parent.set(root, null);

	// pop all items one by one
	while (nodeStack.length != 0)
	{
		// pop the top item from stack
		var current = nodeStack[nodeStack.length-1];
		nodeStack.pop();

		// If leaf node encountered, print Top To
		// Bottom path
		if (current.left == null && current.right == null)
			printTopToBottomPath(current, parent);

		if (current.right != null)
		{
			parent.set(current.right,current);
			nodeStack.push(current.right);
		}
		if (current.left != null)
		{
			parent.set(current.left,current);
			nodeStack.push(current.left);
		}
	}
}

/* binary tree node */
class Node
{
constructor(data)
{
	this.left = null;
	this.data = data;
	this.right = null;
}
}

// Given Tree
var root = new Node(6);
root.left = new Node(3);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);
root.right = new Node(5);
root.right.right = new Node(4);
printRootToLeaf(root);