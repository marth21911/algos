// Birthday cake: Return the number of largest values from an array of numbers
var candles =[3,2,1,3]
var test = [18,90,90,13,90,75,90,8,90,43]
function birthdayCake (candles){
    var count = 0;
    var tallest = candles[0];
    if(candles.length ==0){
        return 0;
    } else {
        for(var i =0;i<candles.length; i++){
            if(candles[i] > tallest){
                tallest = candles[i];
                count = 0;
                console.log("i reset to" + candles[i])
            }
            if (candles[i] == tallest){
                count ++;
                console.log("I added to" + candles[i]);
            }
        }
        return count;
    }
}
// console.log(birthdayCake(candles));
console.log(birthdayCake(test));