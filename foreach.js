//let a = ["ant", "bat", "cat", 42];

//
//let soliloquy = "To be, or not to be, that is the question:";
//Array.from(soliloquy).forEach(function(character) {
//    console.log(character);
//})

let arr = [8,42,17,99];
let sorted = arr.sort(function(a, b) { return a-b;});

sorted.forEach(number => console.log(number));
