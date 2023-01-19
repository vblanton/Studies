// using sort() in a more interesting way
// In your callback function, you would compare tree1.pineCones to tree2.pineCones. If tree1 has more pineCones, you would return -1 to put it before tree2. Otherwise, you’d return 1 to put tree2 before tree1.
// demo: https://codepen.io/cferdinandi/pen/YzjrPBP?editors=0011
trees.sort(function (tree1, tree2) {

	// If the tree1 has more pine cones, put it before tree2
	if (tree1.pineCones > tree2.pineCones) {
		return -1;
	}

	// Otherwise, put tree2 before tree1
	return 1;

});