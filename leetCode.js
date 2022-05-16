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
    var newArr = [];
    for(var i=0; i<(m+n);i++){
        console.log(i);
        console.log("Comparing " + nums1[0] + " and " + nums2[0]);
        if(nums1[0]<=nums2[0] && nums1[0]!=0){
            console.log("if")
            newArr.push(nums1[0]);
            nums1.shift();
            
        }else{
            console.log("else")
            newArr.push(nums2[0]);
            nums2.shift();
        }
    }
    nums1= newArr
    console.log(nums1);
    return nums1
}


var x=[1,2,3,0,0,0]
var y= 3
var z= [2,5,6]
var c= 3
console.log(merge(x,y,z,c));