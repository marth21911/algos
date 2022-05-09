// Birthday cake: Return the number of largest values from an array of numbers
// Notes about: Keep track of the highest value, if a larger one is encountered, reset count to 0. 
// function birthdayCake (candles){
//     var count = 0;
//     var tallest = candles[0];
//     if(candles.length ==0){
//         return 0;
//     } else {
//         for(var i =0;i<candles.length; i++){
//             if(candles[i] > tallest){
//                 tallest = candles[i];
//                 count = 0;
//             }
//             if (candles[i] == tallest){
//                 count ++;
//             }
//         }
//         return count;
//     }
// }
// var candles =[3,2,1,3]
// // console.log(birthdayCake(candles));
// //Converts 12 hour time to Military, accounting for midnight and noon edge cases
// function timeConversion(time){
//     var Realhrs = time.slice(0,2);
//     var hrs = parseInt(Realhrs);
//     var afterHrs='';
//     var final = hrs.toString();
//     for(var i=2; i<8; i++){
//         afterHrs = afterHrs + time[i];
//     }
//     if(time.includes("AM") && Realhrs != "12"){
//         console.log("Not noonmidnight AM")
//         return(Realhrs + afterHrs);
//     }
//     if(time.includes("PM") && Realhrs != "12"){
//         hrs += 12;
//         final = hrs.toString();
//         console.log("Not noonmidnight PM")
//         return (final + afterHrs);
//     }
//     if(time.includes("AM") && Realhrs =="12"){
//         final = "00";
//         console.log("midnight");
//         return (final + afterHrs);
//     }
//     if(time.includes("PM") && Realhrs =="12"){
//         final = "12";
//         console.log("noon");
//         return(final + afterHrs);
//     }
// }

//Grading students: Round values to next modulus of 5, if within 3. cut off at 40, anything below fails.
//Ran into numerous issues building single function, break wouldnt work properly.
//Functions well calling a second function, which is essentially just the nested for loop.
function upCounter(num){
    var original= num;
    for(var i=0; i<2;i++){
        num++
        if(num % 5 ==0){
            return num;}
        }
    if(!num % 5 == 0|| num % 5 == 0){
        return original
    }
}
function Grades(grades){
    var newGrades=[];
    for(var i=0; i<= grades.length; i++) {
        console.log(i)
        if(grades[i] <= 37){
            console.log("Failing grade below 40");
            newGrades.push(grades[i]);
        }if(grades[i]>=38){
            console.log("doing math")
            newGrades.push(upCounter(grades[i]));
            }
        }
    console.log(newGrades);
    return newGrades;
}

var test=[59,66,38,79,80,39];
Grades(test)
