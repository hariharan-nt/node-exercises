function average(arr){
    var avg=0,total=0;
    arr.forEach(function(score){
        total+=score;
    });
    // for(var i=0;i<arr.length;i++){
    //     temp +=arr[i];
    // }
    avg= total/arr.length;
    return Math.round(avg);
}

var scores=[ 90,98,89,100,100,86,94];
console.log(average(scores));

var scores2=[40,65,77,82,80,54,73,63,95,49];
console.log(average(scores2));

//For rounding up to nearest integer
//use Math.round() which will round up to the
// nearest integer