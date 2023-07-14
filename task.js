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

//sathish object.values method
// object methods 

//method definition

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};


//method execution

console.log(Object.values(object1));

// output [ 'somestring', 42, false ]
