//function to extract username and domain from a given mail
// function emailParts(email){
//     let userName, domain;
//     let frstTrans = email.toLowerCase();
//     userName = frstTrans.split("@")[0];
//     domain =  frstTrans.split("@")[1];
//     let result = `Le nom d'ulisateur est : ${userName} et le domaine est : ${domain}`;
//     return result;
// }
let states = ["Nebraska", "Kansas", "North Dakota", "South Dakota"];

function imperativeSingles (elements){
    return elements.filter(element => element.includes('Nebraska'))
};
console.log(imperativeSingles(states));
function functionalSingles(elements) {
    return elements.filter(element => element.split(/\s+/).length !== 2);
}
console.log(functionalSingles(states));

String.prototype.blank = function(){
    let rgx = /^\s*$/;
    return !!this.match(rgx);
}