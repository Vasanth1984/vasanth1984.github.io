//Array - container / collection 
var basket = ["fish", "chicken", "duck"];

for (var i =0; i < basket.length; i++)
    console.log(">",basket[i]); 

    var i = 0; 
while (i < basket.length) {
    console.log(basket[i]);
    i++; 
}

basket.push ("crab"); 

i = 0; 
while (i < basket.length) {
    console.log(basket[i]);
    i++; 
}

basket.shift (); 

i = 0; 
while (i < basket.length) {
    console.log(basket[i]);
    i++; 
}

