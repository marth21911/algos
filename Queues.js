class ArrQ{
    constructor(){
        this.items=[];
    }
    enqueue(val){
        this.items.unshift(val);
        console.log("I have added" +val + "to my queue");
        console.log(this);
        return this;
    }
    NormalQueueRemoval(){
        if(this.length !=0){
            this.items.pop();
            return this.items;
        }
    }
    RemoveFirstVal(){
        if(this.length != 0){
        this.items.shift();
        return this.items;
        }
    }
    isEmpty(){
        return this.items.length === 0;
    }
    FrontVal(){
        if(this.length != 0 ){
            return this.items[0];
        }
    }
}
var myArrQ= new ArrQ;
myArrQ.enqueue(3);
myArrQ.enqueue(6);
myArrQ.enqueue(5);
myArrQ.enqueue(4);
myArrQ.NormalQueueRemoval();
console.log(myArrQ.items)
myArrQ.RemoveFirstVal();
console.log(myArrQ.items);

class QueueNode{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue{
    constructor(){
        this.head = null;
    }

    //enqueue
    enqueue(val){
        if (this.isEmpty()) {
            var newNode = new QueueNode(val);
            this.head = newNode;
        } else {
            var newNode = new QueueNode(val);
            var runner = this.head;
            while (runner.next) {
                runner = runner.next
            }
            runner.next = newNode;
        }
    }
    SumOfHalves() {
        if(this.isEmpty()) {
            console.log("IsEmptyFalse");
            return false;
        }
        else{
            // Set counting variables
            var sumL = 0;
            var sumR = 0;
            var len = this.size();
            for (var i = 1; i <= this.length; i++) {
                var temp = this.dequeue();
                if (len % 2 == 1 && i == Math.ceil(len/2)) {
                    sumL += temp;
                    sumR += temp;
                } else if(i<=len/2){
                    sumL += temp;
                } else {
                    sumR += temp;
                }
                this.enqueue(temp);
            }
            return sumL === sumR;
        }
    }
    //dequeue
    dequeue(){
        if (this.isEmpty()) {
            console.log("This queue is empty")
        } else if (this.head.next == null) {
            this.head = null;
        } else {
            var temp = this.head.value;
            this.head = this.head.next;
            return temp;
        }
    }
    //isempty
    isEmpty(){
        return this.head === null;
    }

    //look at front
    checkFront(){
        if (this.isEmpty()) {
            console.log("It's empty, nothing in front")
        } else {
            console.log(this.head.value)
        }
    }

    printValues(){
        if (this.isEmpty()) {
            console.log("it's empty")
        } else {
            var runner = this.head;
            while (runner) {
                console.log(runner.value);
                runner = runner.next;
            }
        }
    }
}