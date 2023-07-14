//filter function 

//function definition
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

//function execution
console.log(result);

//output [ 'exuberant', 'destruction', 'present' ]

//object.keys method("Vishva Implementation")

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  };
  
  console.log(Object.keys(object1));

  //output:[ 'a', 'b', 'c' ]

