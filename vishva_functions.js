//map function

const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);
console.log(map1);

//output : [ 2, 8, 18, 32 ]

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
  

//boopesh object entries

const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
