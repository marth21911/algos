// Birthday cake: Return the number of largest values from an array of numbers
// Notes about: Keep track of the highest value, if a larger one is encountered, reset count to 0. 
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
            }
            if (candles[i] == tallest){
                count ++;
            }
        }
        return count;
    }
}
var candles =[3,2,1,3]
// console.log(birthdayCake(candles));
//Converts 12 hour time to Military, accounting for midnight and noon edge cases
function timeConversion(time){
    var Realhrs = time.slice(0,2);
    var hrs = parseInt(Realhrs);
    var afterHrs='';
    var final = hrs.toString();
    for(var i=2; i<8; i++){
        afterHrs = afterHrs + time[i];
    }
    if(time.includes("AM") && Realhrs=="12"){
        time.replace('AM', '');
        final = "00"
        return (final + afterHrs);
    } else if(time.includes("AM")){
        return(final + afterHrs);
    } else if(time.includes("PM") && Realhrs =="12"){
        var Military = hrs + 0;
        final = Military.toString();
        return (final + afterHrs);
    } else{
        var Military = hrs + 12;
        final = Military.toString();
        return (final + afterHrs);
    }
    
}
console.log(timeConversion("06:40:03AM"));
console.log(timeConversion("04:59:59AM"));