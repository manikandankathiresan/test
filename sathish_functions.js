//filter function 

//function definition
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

//function execution
console.log(result);

//output [ 'exuberant', 'destruction', 'present' ]

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

