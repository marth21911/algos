class Stack {
    //Stacks--LIFO 
    constructor(){
        this.items = [];
    }

    //Add Value
    push(item) {
        this.items.push(item);
        return this.size();
    }
    //Remove Value
    remove(){
        this.items.pop();
        return this.size();
    }
    //Look at top value
    topValue() {
        return this.items[this.items.length -1];
    }
    //is empty
    isEmpty(){
        return this.items.length ===0;
    }
    //Size
    size(){
        return this.items.length;
    }

}

//Stack with SLL

class StackNode{
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor (){
        this.head = null;
    }
    //Add Val
    push(val) {
        var newNode = new StackNode(val);
        if(this.isEmpty()){
            this.head = newNode;
            return this.size();
        } else {
            var runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            runner.next = newNode;
            return this.size();
        }
        
    }
    //Remove Val
    pop(){
        if(this.isEmpty){
            return null;
        } else if(this.head.next ==null){
            var temp = this.head;
            this.head = null;
            return temp.data;
        }else{
            var runner= this.head;
            while(runner.next){  
                if (runner.next.next ==null){
                    temp = runner.next;
                    runner.next = null;
                    return temp.data;
                }
            }
        }
    }

    //Top Value
    topValue(){
        if(this.isEmpty()){
            return null;
        } else{
            var runner = this.head;
            while(runner.next){
                runner = runner.next;
            }
            return runner.data;
        }
    }
    //IsEmpty
    isEmpty(){
        return this.head===null;
    }

    //Size
    size(){
        var runner = this.head;
        var count = 0;
        while (runner != null){
            count ++
        }
        console.log("The size of the list is" + count);
        return count;
    }

}
class TwoStackQueue {
    constructor() {
        this.stack1 = new StackArr();
        this.stack2 = new StackArr();
    }

    enqueue(item) {
        this.stack1.push(item);
        console.log(this.stack1);
    }

    dequeue() {
        while(this.stack1.items.length > 1){
            this.stack2.push(this.stack1.pop())
            console.log(this.stack2.items);
        }
        var temp = this.stack1.pop();
        while(this.stack2.items.length > 0){
            this.stack1.push(this.stack2.pop())
            console.log(this.stack2.items);
        }
        return temp;
    }
}
var mydoublestack = new TwoStackQueue;
mydoublestack.enqueue(1);
mydoublestack.enqueue(2);
mydoublestack.enqueue(3);
mydoublestack.enqueue(4);
mydoublestack.enqueue(5);
// mydoublestack.dequeue();
mydoublestack.moveRight();
console.log(mydoublestack.stack2);
// console.log(mydoublestack.stack1)
