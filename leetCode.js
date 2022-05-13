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

function maxSubArray(nums){
    var maxSum=null;
    var curSum=null;
    for(var i=0;i<nums.length;i++){
        if(nums[i]>(nums[i]+curSum)){
            console.log(curSum);
            curSum=nums[i];
            console.log(curSum);
        }else{
            
            curSum+=nums[i];
            console.log(curSum)
            console.log(maxSum)
        }
        if(maxSum==null){
            maxSum= curSum;
        }else{
            maxSum=Math.max(curSum,maxSum);
        }
    }
    return maxSum;
}
var nums = [-1];
console.log(maxSubArray(nums));