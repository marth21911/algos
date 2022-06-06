function solution(objects, radius) {
    var maxpos = 0;
    var count = 0;
    var lamp =objects[0];
    var counter =0;
    console.log( "I start at " + objects[0] + " and end at " + objects[objects.length-1])
    for(var i=objects[0]; i<objects[objects.length-1]; i++){
        lamp = i;
        counter =0; 
        for(var j=0; j<objects.length; j++){
            if(objects[j] >= (lamp-radius) && objects[j]<=(lamp+radius)){
                counter++;
                console.log("I found a hit " + counter);
            }
            if(counter > count){
                count= counter;
                maxpos = lamp;
                console.log("Found new maxPosition " + maxpos);
                console.log("I can see : " + count);
            }
        }
    }
    return maxpos;
}

console.log(solution([-5, 3, 4, 9], 5));
