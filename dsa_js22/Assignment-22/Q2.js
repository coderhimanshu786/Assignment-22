


	// binary tree node structure
	class Node
	{
		
		constructor( data)
		{
			this.data = data;
			this.left=this.right=null;
		}
	};
	
	// method to flip the binary tree
	function flipBinaryTree(root)
	{
		if (root == null)
			return root;
		if (root.left == null && root.right ==null)
			return root;

		// recursively call the same method
		let flippedRoot=flipBinaryTree(root.left);

		// rearranging main root Node after returning from recursive call
		root.left.left=root.right;
		root.left.right=root;
		root.left=root.right=null;
		return flippedRoot;
	}
	
	// Iterative method to do level order traversal line by line
	function printLevelOrder(root)
	{
		// Base Case
		if(root==null)
			return ;
		
		// Create an empty queue for level order traversal
		let q=[];
		// Enqueue Root and initialize height
		q.push(root);
		while(true)
		{
			// nodeCount (queue size) indicates number of nodes at current level.
			let nodeCount = q.length;
			if (nodeCount == 0)
				break;
			
			// Dequeue all nodes of current level and Enqueue all nodes of next level
			while (nodeCount > 0)
			{
				let node = q.shift();
				console.log(node.data+" ");
				if (node.left != null)
					q.push(node.left);
				if (node.right != null)
					q.push(node.right);
				nodeCount--;
			}
			console.log("<br>");
		}
	}
	//Example-1
    let root=new Node(1);
		root.left=new Node(2);
		root.left.left=new Node(4);
		root.left.right=new Node(5);
		root.right=new Node(3);
		root.right.left = new Node(6);
		root.right.right = new Node(7);

    //Example-2 
	// let root=new Node(1);
	// 	root.left=new Node(2);
	// 	root.right=new Node(3);
	// 	root.right.left = new Node(4);
	// 	root.right.right = new Node(5);
		console.log("Level order traversal of given tree<br>");
		printLevelOrder(root);
	
		root = flipBinaryTree(root);
		console.log("Level order traversal of flipped tree<br>");
		printLevelOrder(root);
