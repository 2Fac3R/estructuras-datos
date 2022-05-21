const myArray = require('./arrays');
try {
  // Array
  const fruits = new myArray();
  fruits.push('apple');
  fruits.push('banana');
  fruits.push('watermelon');

  console.log(fruits);
  console.log(fruits.get(1));
  fruits.delete(3);
  // fruits.pop();
  console.log(fruits);
  // console.log(fruits.get(2));
} catch (error) {
  console.log(error);
}
