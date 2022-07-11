// function Roman(XIV){
//     var I = 1;
//     var V = 5;
//     var X = 10;
//     var L = 50;
//     var C = 100;
//     var D = 500;
//     var M = 1000;
//     var stringArr=[];
//     var num = 0;
//     for(var i =0; i<XIV.length; i++){
//         stringArr.push(XIV[i]);
//     }
//     for( var j=0; j<array.length; j++){
//         var realNum = array.filter(([key,value])=> key == stringArr[i]);
//         console.log(realNum[1]);
//         num+=realNum;
//     }
//     return num;
// }
// var rn="V"
// Roman(rn);
//
//if the array contains duplicate values, return true. Else false
// function containsDuplicate(arr){
//     var testArr=[];
//     for(var i=0;i<arr.length;i++){
//         if(testArr.includes(arr[i])){
//             return true
//         }else{
//             testArr.push(arr[i]);
//         }
//     }
//     return false
// }
// var nums = [1,1,1,3,3,4,3,2,4,2];
// console.log(containsDuplicate(nums));

//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// function maxSubArray(nums){
//     var maxSum=null;
//     var curSum=null;
//     for(var i=0;i<nums.length;i++){
//         if(nums[i]>(nums[i]+curSum)){
//             console.log(curSum);
//             curSum=nums[i];
//             console.log(curSum);
//         }else{
            
//             curSum+=nums[i];
//             console.log(curSum)
//             console.log(maxSum)
//         }
//         if(maxSum==null){
//             maxSum= curSum;
//         }else{
//             maxSum=Math.max(curSum,maxSum);
//         }
//     }
//     return maxSum;
// }
// var nums = [-1];
// console.log(maxSubArray(nums));


function twosum(nums,target){
    var answer=[];
    for(var i = 0; i<nums.length;i++){
        for(j=(i+1);j<nums.length;j++){
            if((nums[i] + nums[j])==target){
                answer.push(i);
                answer.push(j);
            }
        }
    }
    return answer
}

function merge(nums1, m, nums2, n){
    for(var k=0; k<n; k++){
        nums1.pop();
    }
    console.log(nums1);
    for(var i=0; i<nums2.length;i++){
        nums1.push(nums2[i])
        console.log("Main loop: " + (i+1));
        for(var j=nums1.length-1; j>0;j--){
            if(nums1[j-1] > nums1[j]){
                console.log("Comparing: j "+ nums1[j] + " vs j-1: " + nums1[j-1] );
                var temp = nums1[j];
                nums1[j] = nums1[j-1];
                nums1[j-1]= temp;
            }
        }
    }
    return nums1
}


function intersect(nums1,nums2){
    var newArr=[]
    if(nums1.length<=nums2.length) {
        for (var i=0;i<nums1.length;i++) {
            if(nums2.indexOf(nums1[i])>-1){
                newArr.push(nums1[i]);
                nums2.splice(nums2.indexOf(nums1[i]),1);
            }
        }

    }
    else {
        for (var i=0;i<nums2.length;i++) {
            if(nums1.indexOf(nums2[i])>-1){
                newArr.push(nums2[i]);
                nums1.splice(nums1.indexOf(nums2[i]),1);
            }
        }
    }
    return newArr;
}

function maxProfit(prices){
    var minBuy = {price:prices[0], index:0}
    var maxSell= {price:prices[1], index:1};
    if(prices.length<2){
        return 0;
    }
    for(var i=1; i<prices.length;i++){
        if(prices[i]>maxSell.price){
            maxSell={price:prices[i], index: i};
        }
    }
    for(var j=0; j<prices.length; j++){
        if(prices[j] < minBuy.price && maxSell.index > j){
            minBuy={price:prices[j], index:j};
        }
    }
    if(maxSell.price-minBuy.price< 0){
        return 0;
    }else{
        return (maxSell.price-minBuy.price);
    }
    
}
function altMax(prices){
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit

        max_profit = Math.max(max_profit, profit);
    } else {
        left = right;
    }
    right++;
    }
    return max_profit;
}

var fib = function(n) {
    if(n<=1){
        return n;
    }
    return fib(n-1)+fib(n-1);
}

function tribonacci(n){
    var numbers = []
    for(var i=0; i<=n; i++){
        if(i==0){
            numbers.push(0)
        }
        if(i==1||i==2){
            numbers.push(1)
        }
        if(i>2){
            numbers.push((numbers[i-1]+numbers[i-2]+numbers[i-3]));
            console.log("doin math " + (numbers[i-1]+numbers[i-2]+numbers[i-3]));
        }
    }
    console.log(numbers);;
    console.log(numbers[n]);
    return numbers[n];
}

// function climbStairs(n){
//     var partA = n;
//     var partB = n;
//     var temp = 0;
//     for(var i=n-1; n>=0;n--){
//         temp = partA;
//         partA = partA + partB
//         partB=temp;
//     }
//     console.log(partA);
//     return partA;
// }
// climbStairs(2);
// climbStairs(10);
// function costStairs(cost){
//     console.log("Cost length is " + cost.length);
//     var i =0;

//     if(cost[0]>cost[1]){
//         i = 1;
//     }
//     var total= cost[i];
//     console.log("Starting cost is: " + total);
//     while(i < cost.length-1){
//         if(cost[i+1]>=cost[i+2] && i+2 != null){
//             i+=2;
//             total += cost[i]
//             console.log("loop, i = " + i + " value is: " + cost[i]);
//             console.log("total cost is: " + total);
//         }else if(i+1 != null){
//             i+=1;
//             total += cost[i];
//             console.log("loop, i = " + i + " value is: " + cost[i]);
//             console.log("total cost is: " + total);
//         }else{
//             return total
//         }
//     }
//     return total
// }
// var test =[1,100,1,1,1,100,1,1,100,1];
// console.log(costStairs(test));
// function rob(nums){
//     var max=0;
//     for(var i=0; i<nums.length; i){
//         console.log("looping " + i);
//         console.log("Comparing " + nums[i] + " and "+ (nums[i+1]+nums[i+2]));
//         if((nums[i]+nums[i+2])>=(nums[i+1])){
//             max+= nums[i];
//             i+=2;
//         }else{
//             i++
//         }
        
//     }
//     return max;
// }
// var test = [1,2,3,1];
// console.log(rob(test))

// function addTwoNumbers (l1,l2){
//     let one ="";
//     let two = "";
//     let three= 0;
//     var answer=[];
//     console.log(l1.length);
//     for(var i=l1.length-1; i>=0; i--){
//         console.log("Li entry " + l1[i])
//         one+=toString(l1[i]);
//     }
//     for(var j=l2.lenth-1; j>=0; j--){
//         console.log("l2 entry "+l2[j])
//         two+=toString(l2[j]);
//     }
//     console.log("One : " + one + " Two: "+ two);
//     one=parseInt(one);
//     console.log(one);
//     two=parseInt(two);
//     console.log(two);
//     three = (one+two);
//     console.log(three);
//     three = toString(three);
//     for(var k=three.length-1; k>=0; k--){
//         console.log("Answer entry " + three[k]);
//         answer.push(three[k]);
//     }
//     return answer;
// }
// console.log(addTwoNumbers([2,4,3],[5,6,4]) + "test");

// var mySqrt = function(x) {
//     var base=1;
//     var max = (x/2);
//     if(x==1){
//         return 1
//     }
//     while(max>=base){
//         var mid= base+(max-base)/2;
//         console.log("mid "+mid)
//         if(mid*mid==x){
//             console.log("mid final "+mid)
//             return Math.floor(mid)
//         }
//         if(mid >(x/mid)){
//             max = mid-1;
//             console.log("max "+max)
//             }else{
//             base= mid+1;
//             console.log("base "+base)
//         }
//     }
//     return max;
// };
// console.log(mySqrt(1024));

// function letters(letters,target){
//     var tarVal=target.charCodeAt(0);
//     console.log(tarVal);
//     for(var i=0; i<letters.length; i++){
//         var test= letters[i]
//         var numTest= test.charCodeAt(0)
//         if(numTest > tarVal){
//             return letters[i]
//         }
//     }
// }
// console.log(letters(["c","f","j"],"d"))

var lengthOfLongestSubstring = function(s) {
    let max=0;
    let current=0;
    let start=0
    let test=[]
    for(var i=0;i<s.length;i++){
        console.log("Loop "+ i)
        console.log("test string " + test)
        console.log("max is " + max + " current is " + current)
        if(test.includes(s[i])){
            if(current>max){
                max=current;
            }
            current=0;
            test=[]
            i=start+1
        }
        if(!test.includes(s[i])){
            if(test.length==0){
                start=i
            }
            test.push(s[i])
            current ++;
        }
    }
    return Math.max(current, max)
};
console.log(lengthOfLongestSubstring("dvdf"))