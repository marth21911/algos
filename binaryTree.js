//Node class
class Node{
    constructor(val){
        this.value= val;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    //methods go here
    isEmpty(){
        if(this.root==null){
            console.log("This thing is empty")
            return this.root==null;
        }
        console.log("I am here and my root is :" + this.root.value)
    }
    min(){
        var runner = this.root;
        while(runner.left != null){
            runner = runner.left;
        }
        console.log("Min value is: " + runner.value);
        return runner.value;
    }
    max(){
        var runner = this.root;
        while(runner.right != null){
            runner = runner.right;
        }
        console.log("Max value is: " + runner.value);
        return runner.value;
    }
    containsIterative(val){
        var present = false;
        var runner = this.root;
        while(runner != null){
            console.log(runner.value);
            if(runner.value == val){
                present=true;
                break
            }
            if(val > runner.value){
                runner = runner.right;
            }
            else{runner = runner.left
            };
        }
        console.log(present);
        return present;
    }
    containsRecursive(val,runner=this.root){
            if (runner == null){
                return false;
            }
            if(runner.value == val){
                return true;
            }
            if(val > runner.value){
                runner = runner.right;
                return(this.containsRecursive(val,runner))
            }
            else{
                runner = runner.left;
                return(this.containsRecursive(val,runner))
            };
    }
    range(){
        console.log(this.max() - this.min());
        return(this.max() - this.min());
    }
    Insert(val){
        var runner = this.root;
        if(this.isEmpty()){
            this.root= new Node(val);
        }
    while(runner != null){
        if(runner.left == null && val <runner.value){
            runner.left = new Node(val)
        }
        else if(runner.right == null && val> runner.value){
            runner.right = new Node(val)
        }
        else if( val > runner.value){
            runner = runner.right;
        }
        else{runner = runner.left};
    }
    console.log(this.max())
    console.log(this.min())
    return this
    }
    recursInsert(val,runner=this.root){
        if (runner == null){
            this.root = new Node(val) 
        }
        if(runner.left == null && val <runner.value){
            runner.left = new Node(val)
            console.log("my min is ACTUALLY:" + this.min());
            return this
        }
        else if(runner.right == null && val> runner.value){
            runner.right = new Node(val);
            console.log("I found a right home and I am :" + this.max());
            return this
        }
        else if( val > runner.value){
            runner = runner.right;
            return (this.recursInsert(val,runner));
        }
        else{
            runner = runner.left;
            return(this.recursInsert(val,runner))};
    }
    // fullTree
//     root
//     <-- 25 -->
//   /            \
// 15             50
// /    \         /    \
// 10     22      35     70
// /   \   /  \    /  \   /  \
// 4    12  18  24  31  44 66  90


// Depth First Search Preorder
// Use your skills with BSTs to return an array that contains all the values in the tree using the concept of depth first search preorder. 
// Preorder: [root][left][right] -> for each node of this tree, we will read the data of that node, then visit the left subtree and then the right subtree
// Should get back [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]

toArrPreorder(node = this.root, vals = []) {
    if (node) {
        vals.push(node.data);
        this.toArrPreorder(node.left, vals);
        this.toArrPreorder(node.right, vals);
    }
    return vals;
    }

    toArrInorder(node = this.root, vals = []) {
    if (node) {
        this.toArrInorder(node.left, vals);
        vals.push(node.data);
        this.toArrInorder(node.right, vals);
    }
    return vals;
    }

    toArrPostorder(node = this.root, vals = []) {
    if (node) {
        this.toArrPostorder(node.left, vals);
        this.toArrPostorder(node.right, vals);
        vals.push(node.data);
        return vals;
    }
}
size(){
    var length= this.toArrInorder();
    console.log(length);
    return length.length
    }
height(root){
    if(root ==null){
        console.log("im empty?")
        return 0
    }
    var leftH = this.height(root.left);
    console.log(leftH);
    var rightH =this.height(root.right);
    console.log(rightH);
    if (leftH > rightH){
        return(leftH+1);  }
    else   {
        return(rightH+1); }

}
isFull(root){
    if(root ==null){
        return true
    }
    if((root.left==null && root.right == null)||(root.left != null && root.right != null)){
        return((this.isFull(root.left))&&(this.isFull(root.right)))
    }
    console.log("not a tree")
    return false
}
    
}


// myBST.isEmpty();
var myBST = new BST();
// var nodeA = new Node(6);
// myBST.root= nodeA;
// myBST.root.left = new Node(4);
// myBST.isEmpty();
// myBST.min();
// myBST.max();
// myBST.root.left = new Node("4");
// myBST.root.left.left = new Node("3");
// myBST.root.left.right = new Node("5");
// myBST.root.right = new Node("8");
// myBST.root.right.left = new Node("7");
// myBST.root.right.right = new Node("9");
// myBST.range();
// myBST.containsIterative(76);
// console.log(myBST.containsRecursive(76));
// myBST.Insert(16);
// myBST.recursInsert(1);
// console.log("My size is " + myBST.size())
// console.log("The height is " + myBST.height(myBST.root))
myBST.root= new Node("5");
myBST.root.left = new Node("3");
myBST.root.right = new Node("6");
console.log(myBST.isFull(myBST.root))


