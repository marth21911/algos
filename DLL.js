class Node {
    constructor(value) {
        this.value = value
        // .next starts null, because there may be no next!
        this.next = null
        this.previous = null
    }
}
class DLL{
    constructor(){
        this.head = null;
        this.tail =null;
    }
    isEmpty (){
        return this.head == null;
    }
// Insert at Front
// Insert a given value to the front of the doubly linked list
InsertAtFront(val) {
    var newNode = new Node(val);
    if(this.head==null){
        this.head = newNode
        this.tail=newNode;
        // return this;
    }
    else{
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head=newNode;
        // return this;
    }
    }
Dllarray(){
    var array = [];
    var runner = this.head;
    while(runner != null){
        array.push(runner.value);
        runner = runner.next;
    }
    console.log(array);
    return this
}
// Insert at Back
// Insert a given value to the back of the doubly linked list
InsertAtBack(val) {

    var newNode = new Node(val);
    if(this.isEmpty()){
        this.head = newNode;
        this.tail = newNode;
    }else {
        var runner = this.head
        while(runner.next != null) {
            if (runner.next ==null){
                runner.next = newNode;
                this.tail = newNode;
            }
        }
        return this
    }
}

// Remove Middle Node
// Remove the node in the middle of your doubly linked list
RemoveMiddle() {
    var tailRunner = this.tail;
    var headRunner = this.head;
    while(tailRunner != headRunner){
        console.log("ran a loop")
        if(tailRunner.previous != headRunner.next){
            tailRunner = tailRunner.previous;
            console.log(tailRunner.value)
            if(tailRunner.previous == headRunner.next){
                var temp = tailRunner;
                tailRunner.previous= headRunner;
                headRunner.next = temp;
                return this;}
                headRunner= headRunner.next;
            }
        } 
    }
}

// // Insert After
// // Insert a given value after another given value
// InsertAfter(val, valB) {
//     // your code here
// }

// // Insert Before
// // Insert a given value before another given value
// InsertBefore(val, valB) {
//     // your code here
// }
var myDll = new DLL;
myDll.InsertAtFront(3);
myDll.InsertAtFront(4);
myDll.InsertAtFront(6);
myDll.InsertAtFront(7);
myDll.InsertAtFront(8);
myDll.InsertAtFront(9);
myDll.Dllarray();
myDll.RemoveMiddle();
myDll.Dllarray();
