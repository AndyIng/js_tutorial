let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
//function functionalMap(states) {
//return states.map(state => state.toLowerCase().split(/\s+/).join("-"));
//}

console.log(functionalMap(states));

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}


function imperativeMap(states) {
    let urlStates = [];
    states.forEach(function(state) {
    urlStates.push(urlify(state));
});
 return urlStates;
 }
 console.log(imperativeMap(states));
 
 function functionalMap(states) {
     return states.map(state => urlify(state));
 }
 console.log(functionalMap(states));
 
 function fullUrlify(string) {
     return "https://example.com/"+urlify(string);
 }
 
 function fullFunctionalMap(states) {
     return states.map(state => fullUrlify(state));
 }
 
 console.log(fullFunctionalMap(states));
 
 //filter: Imperative version
 function imperativeFilter(states) {
     let singleWords = [];
     states.forEach(function(state) {
         if (state.split(/\s+/).length === 2) {
             singleWords.push(state);
         }
     });
     return singleWords;
 }
 
 console.log(imperativeFilter(states));
 
 function functionalFilter(states) {
     return states.filter(state => state.split(/\s+/).length === 1);
 }
 
 console.log(functionalFilter(states));
 
 function dakotalFilter(states) {
     return states.filter(state => state.includes('Dakota'));
 }
 
console.log(dakotalFilter(states));

let numbers = [1,2,3,4,5,6,7,8,9,10];

//reduce iterative solution
function iterativeSum(array) {
    let total = 0;
    array.forEach(function(n) {
        total += n;
    });
    return total;
}

console.log(iterativeSum(numbers));

function functionalSum(array) {
    return array.reduce((total,n) => {return total += n});
}
console.log(functionalSum(numbers));

//reduce object: Imperative solution
function imperativeLengths(states) {
    let lengths = {};
    states.forEach(function(state) {
        lengths[state] = state.length;
    });
    return lengths;
}
console.log(imperativeLengths(states));

//reduce functional example 2
function functionalLengths(states) {
    return states.reduce((lengths, state) => {
        lengths[state] = state.length;
        return lengths;
    },{});
    
}
console.log(functionalLengths(states));

let num = [1,2,10,3];
function ex (num) {
    return num.reduce((total, n) => {return total *= n});
}
console.log(ex(num));


