reverseSll(){
    var newSll = new Sll();
    var tempArray =[];
    var runner = this.head;
    while(runner =! null){
        tempArray.push(runner);
        runner = runner.next;
    }
    for(i=tempArray.length-1; i>0;i--){
        // Insert at back each i value
    }

}
checkForLoop(){
    //two runners
    //one runner increments one node at a time
    //the other increments two nodes at a time
    //if they ever end up at the same node, then we have to be in a loop -> return true
    //if one ever reaches null, then it isn't a loop -> return false
    if (this.isEmpty()) {
        console.log("This SLL is empty")
        return false
    }
    var walker = this.head
    var runner = this.head.next
    while (walker && runner) {
        walker = walker.next
        if (runner.next) {
            runner = runner.next.next
        } else {
            return false
        }
        if (walker == runner) {
            return true
        }
    }
    return false
}
removeNeg(){
    var runner = this.head;
    while(runner != null){
        if(runner.next < 0){
            runner.next = runner.next.next; 
        }
        runner = runner.next;
    }
    return this
}