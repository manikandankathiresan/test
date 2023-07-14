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

const object2 = {
  a: 'somestring',
  b: 42,
  c: false
};


//method execution

console.log(Object.values(object2));

// output [ 'somestring', 42, false ]
// object entries

const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

//sathish object.values method
// object methods 

//method definition

const object2 = {
  a: 'somestring',
  b: 42,
  c: false
};


//method execution

console.log(Object.values(object2));

// output [ 'somestring', 42, false ]
// object entries

const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

//object.keys method("Vishva Implementation")

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));

//output:[ 'a', 'b', 'c' ]