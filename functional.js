let states = ["Nebraska", "Kansas", "North Dakota", "South Dakota"];
// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}
  
//urls: Imperative version
function imperativeUrls(elements) {
    let urls = [];
    elements.forEach(function(element) {
      urls.push(urlify(element));
    });
    return urls;
  }
  console.log(imperativeUrls(states));
  
//Functinal version
function imperativeUrl (elements){
    return elements.map(element => urlify(element));
}
console.log(imperativeUrl(states));

//singles: Imperative version
function imperativeSingles (elements){
    let singles = [];
    elements.forEach(function(element){
        if(element.split(/\s+/).length === 1){
            singles.push(element);
        }
    });
    return singles;
}
console.log(imperativeSingles(states));

// singles: Functional version
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length === 1);
}
console.log(functionalSingles(states));

//Imperative sum
let numbers = [1,2,3,4,5,6,7,8,9,10];
function imperativeSum (elements){
    let total = 0;
    elements.forEach(function(n){
        total += n;
    })
    return total;
}
console.log(imperativeSum(numbers));
// sum: Functional solution
function functionalSum(elements) {
    return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

//Length: Imperative solution
function imperativeLength (elements){
    let state = {};
    elements.forEach(function(element){
        state[element] = element.length;
    })
    return state;
}
console.log(imperativeLength(states));
//Length: functinal solution
function functionalLength (elements){
    return elements.reduce((lengths,element) => {lengths[element] = element.length;
                                                                    return lengths;}, {})
}
console.log(functionalLength(states));