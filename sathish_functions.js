//filter function 

//function definition
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

//function execution
console.log(result);

//output [ 'exuberant', 'destruction', 'present' ]

//boopesh object entries

const object1 = {
    a: 'somestring',
    b: 42
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }

