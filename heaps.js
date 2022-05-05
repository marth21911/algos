class MinHeap{
    constructor(){
        this.heap =[null];
    }
    size(){
        return this.heap.length -1;
    }
    topValue(){
        this.size()>0 ? this.heap[1] : null;
    }
    insert (num){
        this.heap.push(num);
        this.shiftUp();
        return this.size();
    }
    shiftUp(){
        var location = this.heap.length -1;
        while(location>1){
            var parentIdx = Math.floor(location/2);
            if(this.heap[location]<this.heap[parentIdx]){
                var temp = this.heap[location];
                this.heap[location]=this.heap[parentIdx];
                this.heap[parentIdx]=temp;
                location = parentIdx;
            }
            else{
                break;
            }
        }
    }
    shiftDown(){
        var locationVal = this.heap[1];
        var position = 1;
        var count =0;
        var leftIdx = Math.floor(position*2);
        var rightIdx= Math.floor((position*2) +1);
        while(position){
            console.log("My left index is  " + leftIdx + " and my value is " + this.heap[leftIdx]);
            console.log("My right index is  " + rightIdx + " and my value is " + this.heap[rightIdx]);
            var testIdx = 0;
            if(this.heap[leftIdx]>this.heap[rightIdx]){
                testIdx = leftIdx;
                console.log("My test val is left  " + this.heap[testIdx] + " and my index is " + testIdx);
            }
            else{testIdx = rightIdx};
            console.log("My test val is right " + this.heap[testIdx])
            if(locationVal > this.heap[testIdx]){
                console.log("Comparing" + locationVal +" and " + this.heap[testIdx] + "on my" + count + "loop");
                var temp = this.heap[position];
                this.heap[position] = this.heap[testIdx];
                this.heap[testIdx]= temp;
                position = testIdx;
                count ++
                console.log("My new location is " + position +" with a value of " + this.heap[position]);
            }
            else if(testIdx == null){
                location =1;
                count=0;
            }
            else if (testIdx==null && count ==0)
                break
            }
                
            
        }
        extractRoot(){
            var end = this.heap[this.heap.length-1];
    
            this.heap.splice(1,1,end);
            this.heap.pop();
            this.shiftDown();
            return(console.log(this.heap));
        }

    // extractTop(){
    //     if(this.size() > 0) {
    //         var extracted = this.heap[1];
    //         this.heap[1] = this.heap.pop();
    //         this.shiftDown();
    //         return extracted;
    //     }
    //     return null;
    // }

    // shiftDown(){
    //     var indexOfVal = 1;
    //     var left = indexOfVal * 2;
    //     var right = indexOfVal * 2 + 1;
    //     while(this.heap[indexOfVal] >= this.heap[left] || this.heap[indexOfVal] >= this.heap[right]){
    //         if(this.heap[left] < this.heap[right]){
    //             var temp = this.heap[indexOfVal];
    //             this.heap[indexOfVal] = this.heap[left];
    //             this.heap[left] = temp;
    //             indexOfVal = left;
    //             left = indexOfVal * 2;
    //             right = indexOfVal * 2 + 1;
    //         }
    //         else{
    //             var temp = this.heap[indexOfVal];
    //             this.heap[indexOfVal] = this.heap[right];
    //             this.heap[right] = temp;
    //             indexOfVal = right;
    //             left = indexOfVal * 2;
    //             right = indexOfVal * 2 + 1;
    //         }
    //     }
    // }
}
var myHeap = new MinHeap();
myHeap.insert(3);
myHeap.insert(9);
myHeap.insert(2);
myHeap.insert(5);
myHeap.insert(1);
myHeap.insert(4);
console.log(myHeap.size());
console.log(myHeap.heap)
myHeap.extractRoot();
console.log(myHeap.size());
console.log(myHeap.heap)
