	//Complexity
    //Time Complexity - O(n)
    //Space Complexity - O(n)
    
    // A binary tree node has data, left pointers and right pointers
	class Node {
		constructor(val) {
			this.data = val;
			this.left = null;
			this.right = null;
		}
	}

	let root;
	
	// head --> Pointer to head node of created doubly linked list
	let head;
	
	// Initialize previously visited node as NULL. This is so that the same value is accessible in all recursive calls
	
    let prev = null;

	// A simple recursive function to convert a given Binary tree to Doubly Linked List root --> Root of Binary Tree
	function BinaryTree2DoubleLinkedList(root)
	{
		// Base case
		if (root == null)
			return;

		// Recursively convert left subtree
		BinaryTree2DoubleLinkedList(root.left);

		// Now convert this node
		if (prev == null)
			head = root;
		else
		{
			root.left = prev;
			prev.right = root;
		}
		prev = root;

		// Finally convert right subtree
		BinaryTree2DoubleLinkedList(root.right);
	}

	/* Function to print nodes in a given doubly linked list */
	function printList(node)
	{
		while (node != null)
		{
			console.log(node.data + " ");
			node = node.right;
		}
	}

	
	root = new Node(10);
	root.left = new Node(12);
	root.right = new Node(15);
	root.left.left = new Node(25);
	root.left.right = new Node(30);
	root.right.left = new Node(36);

	// convert to DLL
	BinaryTree2DoubleLinkedList(root);
		
	// Print the converted List
	printList(head);