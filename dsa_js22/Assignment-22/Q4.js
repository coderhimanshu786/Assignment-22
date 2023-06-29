//Complexity
    //Time Complexity - O(n)
    //Space Complexity - O(n)

	let preIndex = 0;
	// A Binary Tree Node
	class Node
	{
		// Utility function to create a new tree node
		constructor(data)
		{
			this.data=data;
			this.left=this.right=null;
		}
	}
	
// to find index of value in arr[start...end]

function search(arr,strt,end,value)
{
	for (let i = strt; i <= end; i++)
	{
		if(arr[i] == value)
			return i;
	}
	return -1;
}

// Recursive function 
function buildTree(In,pre,inStrt,inEnd)
{
	if(inStrt > inEnd)
		return null;

	/* Pick current node from Preorder traversal using preIndex and increment preIndex */
	let tNode = new Node(pre[preIndex++]);

	/* If this node has no children then return */
	if (inStrt == inEnd)
		return tNode;

	/* Else find the index of this node in Inorder traversal */
	let inIndex = search(In, inStrt, inEnd, tNode.data);

	/* Using index in Inorder traversal, construct left and right subtress */
	tNode.left = buildTree(In, pre, inStrt, inIndex-1);
	tNode.right = buildTree(In, pre, inIndex+1, inEnd);

	return tNode;
}

/* function to compare Postorder traversal on constructed tree and given Postorder */
function checkPostorder(node,postOrder,index)
{
	if (node == null)
		return index;

	/* first recur on left child */
	index = checkPostorder(node.left,postOrder,index);
	
	/* now recur on right child */
	index = checkPostorder(node.right,postOrder,index);
	
	/* Compare if data at current index in both Postorder traversals are same */
	if (node.data == postOrder[index])
		index++;
	else
		return -1;

	return index;
}

// Given array
let inOrder=[4, 2, 5, 1, 3];
let preOrder=[1, 2, 4, 5, 3];
let postOrder=[4, 5, 2, 3, 1];

let len = inOrder.length;

	// build tree from given Inorder and Preorder traversals
	let root = buildTree(inOrder, preOrder, 0, len - 1);

	// compare postorder traversal on constructed tree with given Postorder traversal
	let index = checkPostorder(root,postOrder,0);

	// If both postorder traversals are same
	if (index == len)
		console.log("Yes");
	else
		console.log("No");