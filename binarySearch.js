function search(nums, target){
    if(nums.includes(target)){
        for(var i=0; i<nums.length; i++){
            if(nums[i]==target){
                return i
            }
        }
    } else{
        return -1
    }
}
// Complete, search for value in array. if exists, return index, else return -1

function guessNumber(n){
    let left=1;
    let right=n;
    while(right>=left){
        let mid =left+(right-left)/2;
        if(guess(mid)==0){
            return mid
        }
        if(guess(mid)==-1){
            right=mid-1
        }
        if(guess(mid)==1){
            left = mid+1
        }
    }
}