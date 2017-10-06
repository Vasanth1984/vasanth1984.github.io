//console.log("I am in the browser"); 

//var hungry = true; 
//var thirsty = true; 

//if (hungry == true) {
//    console.log("I am hungry");
//    console.error("I am hungry");
//    console.warn("I am hungry");
//} else if (thirsty) {
//    console.info("But I'm thirsty");
//} else {
//    console.log("I am bored");
//}


//if (hungry) {
//    console.warn ("I am hungry");
//}

//if (thirsty) {
//    console.error ("I am thirsty");
//}


var buffetPrice = function (age) {

var price = 0; 

    if (age <= 0)
        Price = NaN; 
    else if (age<10) {
        Price = 20;
    } else if ((age >= 10) && (age < 21)) {
        Price = 30;
    } else {
        Price = 40;
    }

    return (Price); 
}

console.log("age = 9:" + buffetPrice(0));
console.log("age = 15:" + buffetPrice(19));
console.log("age = 25:" + buffetPrice(25)); 

var mul = function (n,m) {    
    return (n*m);
}


for (var outer = 2; outer <13;outer++) {
    console.info("\nMultiplication table: %d", outer)
    for(var inner = 1; inner < 13; inner++) {
        console.log ("%id * %id = %id", outer, inner, mul(outer, inner)); 
    }
}


var i = 0; 

while (i < 10) {
    console.log("i = %d", i)
    i++;
}

var TIMES = 5;
var toGuess = 7; 
var counter = 1;  
var result = ""; 
var myGuess = -1; 

var evaluate = function(myNum,toGuess) {
    if (myNum < toGuess) {
        return ("higher"); 
    } else if (myNum == toGuess) {
        return ("Correct!")
    }
        return ("lower"); 
}

while (counter <= TIMES) {
    var myGuess = parseInt(prompt("Number between 1 - 10")); 
    result = evaluate(myGuess, toGuess); 
    console.log("Times: %d my guess: %d, result: %s", counter, myGuess, result);
    
    if(result == "Correct!")
        break;     
    //counter = TIMES;    
    counter++; 
}

if (myGuess != toGuess)
console.log("you loose");  

