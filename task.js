// forEach
// definition
// execution

// The forEach() method calls a function (a callback function) once for each array element.
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);
console.log(txt);

function myFunction(value, index, array) {
  txt += value + " "; 
}
let output=txt

//object.keys method("Vishva Implementation")

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));

//output:[ 'a', 'b', 'c' ]