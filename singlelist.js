class Node {
    constructor(value) {
        this.value = value
        // .next starts null, because there may be no next!
        this.next = null
    }
}



class SLList {
    constructor() {
        this.head = null
// as above, it starts null because next doesnt exist yet
    }
    isEmpty (){
        return this.head == null;
    }
    appendValue(value, i) {
        let newNode = new Node(value)
        if(this.head==null){
            this.head == newNode
            return;
        }
        
        var count = 0;
        var runner = this.head;
        while(runner) {
            if (count == i) {
                newNode.next = runner.next
                runner.next = newNode
                return this;
            }
            runner = runner.next
            count++;
        }
        return false;
    } 
    prependValue(value,loc){   
        var newNode = new Node(value);
        var runner = this.head;
        var counter = 1;
        var minusOnLocal = loc - 1;
        var temp;

        while(runner != null){
            if(minusOnLocal <= 1){
                //at the begining: set to head
                this.head = newNode;
                newNode.next = runner;
                break;
            }else if(counter == minusOnLocal){
                //in the middle
                temp = runner.next;
                runner.next = newNode;
                newNode.next = temp;
                break;
            }else if(runner.next == null){
                //at the end: set it to tail
                runner.next = newNode;
                break;
            }
            runner = runner.next;
            counter++;
        }
    }

    minToFront(){
        if(this.head == null){
            return;
        }
        let currentMinPrev = this.head;
        let currentPrev = this.head;
        let currentMin = this.head;
        let runner = this.head;
        while(runner.next != null){
            if(runner.value < currentMin.value){
                currentMin = runner;
                currentMinPrev = currentPrev;
            }
            if(runner != this.head){
                currentPrev = currentPrev.next;
            }
            runner = runner.next;
        }
        //Testing the last node in the list
        if(runner.value < currentMin.value){
            currentMin = runner;
            currentMinPrev = currentPrev;
        }
        //min value was already the head
        if(currentMin == this.head){
            console.log(currentMin.value);
            return;
        } 
        //min value was not already at the head:
        //Set the node prior to the minmum node to minimumNode.next
        currentMinPrev.next = currentMin.next;
        //minimumNode.next = this.head
        currentMin.next = this.head;
        //this.head = minimumNode
        this.head = currentMin;
    }
    
    maxToBack(self){
        if(this.head == null){
            return;
        }
        
        let currentMaxPrev = this.head;
        let currentPrev = this.head;
        let currentMax = this.head;
        let runner = this.head;
        while(runner.next != null){
            if(runner.value > currentMax.value){
                currentMax = runner;
                currentMaxPrev = currentPrev;
            }
    
            if(runner != this.head){
                currentPrev = currentPrev.next;
            }
            runner = runner.next;
        }

    }
    contains(value) {
        var node=this.head
        while( node){
            if (node.value === value){
            console.log("True")
            return true
            }  
            if ( node.next != null){
                node = node.next
            }
            else{
                return false
            }
            
        }
    }
    addToFront(value) {
        // step #1 Make a new node
        var newNode = new Node(value);

        // Check to see if there is a head
        if (this.head == null) {
            this.head = newNode;

            return this;
        }

        // if there is a head
        newNode.next = this.head;
        this.head = newNode;

        return this;


    }

    addToBack(value) {
        var node = new Node(value)
        if (this.isEmpty()) {
            this.head = node;
        } else {
            var temp = this.head
            while (temp.next != null) {
                temp = temp.next
                console.log(temp.value)
            }
            temp.next = node

        }

        return this



    }

    removeFromFront() {

        if (this.head == null) {
            console.log("Nothing heree")
        } else {
            this.head = this.head.next

            return this
        }
        return;


    }

    removeFromBack() {

        if (this.head !== null) {
            var temp = this.head
            while (temp.next.next != null) {
                temp = temp.next
            }
            temp.next = null
        }
        return this
    }
    getAverage(){
        console.log("hi");
        var total = 0;
        var steps = 0;
        var runner= this.head;
        while(runner != null){
            steps +=1;
            console.log(runner.value);
            total += runner.value;
            runner = runner.next;
        }
        var average = total/steps;
        console.log(average);
        console.log(total);
        console.log(steps);
    }
    
    // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if (this.head == null) {
            console.log("There's nothing in the list! Dummy!")
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;

        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while (runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
            // return 'this' to end function and allow chaining of methods
        return this
    }
    concatSLL(sll2){
        var runner = this.head;
        if (this.head == null) {
            console.log("There's nothing in the list! Dummy!")
            return this
        }
        while(runner != null){
            if(runner.next == null){
                runner.next = sll2.head;
                break
            }
            runner = runner.next;
        }
        return this
    }
    splitSLL(val,othersll){
        let runner = this.head;
        if (this.head == null) {
            console.log("There's nothing in the list! Dummy!")
            return this
        }
        while(runner != null){
            if(runner.next.value == val){
                othersll.head = runner.next;
                runner.next = null;
                console.log(othersll.printValues());
                console.log("i did a thing")
                return true
            }
            runner = runner.next;
        }
        return this
    }
}

let sll3 = new SLList();
const sll2 = new SLList();
const sll = new SLList();
sll.addToFront(-3)
sll2.addToFront(2)
sll2.addToFront(4)
sll2.addToFront(6)
sll2.addToFront(8)
sll2.addToFront(10)
sll2.addToFront(12)
sll.addToBack(5)
sll.addToFront(-2)
sll.addToFront(4)
sll.addToFront(7)
sll.addToFront(8)
sll.addToFront(1)

// sll.printValues()
// sll.removeFromBack()
// sll.printValues()
// sll.removeFromFront()
// sll.prependValue(-3,2)
// sll.prependValue(-3,2)
// sll.prependValue(-3,2)
// sll.prependValue(-3,2)
// sll.removeFromBack()
// sll.removeFromBack()
// sll2.printValues()
// sll.printValues()
// sll.contains(8)
sll.concatSLL(sll2)
// sll2.printValues()
// sll.printValues()
// sll.printValues()
// console.log (sll)
sll.splitSLL(6,sll3)
// sll.printValues()
sll3.printValues()