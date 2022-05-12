function chocolateBar(s,d,m){
    var options= 0;
    for(var i=0; i<=(s-m[1]); i++){
        console.log("Main loop " + (i+1));
        var runningCount=0;
        for(var j=i; j < (i+m[1]) ; j++){
            console.log("adding to my running count " + d[j]);
            runningCount+= d[j];
            console.log("Runningcount " + runningCount);

        }
        console.log("My running count for the loop was " + runningCount);
        if(runningCount == m[0]){
            options ++;
            runningCount =0;
        }else{
            runningCount = 0;
        }
        console.log("Total count " + options);
    }
    return options;
}