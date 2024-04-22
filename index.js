const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    console.log(accumulator,currentValue);
  return accumulator + currentValue;
}, 0);

console.log(sum); // Outputs: 15

const fruits = ['apple', 'banana', 'cherry', 'banana', 'apple'];

console.log(fruits.indexOf('banana')); // Outputs: 1
console.log(fruits.indexOf('banana', 2)); // Outputs: 3
console.log(fruits.indexOf('orange')); // Outputs: -1 (not found)

const sentence = 'Hello, world!';

console.log(sentence.indexOf('world')); // Outputs: 7
console.log(sentence.indexOf('world', 8)); // Outputs: -1 (not found)
console.log(sentence.indexOf('foo')); // Outputs: -1 (not found)


function greet() {
    console.log('Hello, ' + this.name);
  }
  
  const person = { name: 'John' };
  greet.call(person); // Outputs: Hello, John
  