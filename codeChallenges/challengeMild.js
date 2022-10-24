//medium
var goodDrivingRecord = true;
var age = 24;
if (goodDrivingRecord === true && age >= 25) {
    console.log("You get a discount"); 
}  else if (goodDrivingRecord === true || age >= 25) {
    console.log("You pay full price");
}  else {
    console.log("Someone else needs to sign for the car");
}
//mild
var num = 14
if (num % 2 === 0) {
    console.log("even");
} else {
    console.log("odd");
}