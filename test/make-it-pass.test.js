var test = require('tape'); // assign the tape library to the variable "test"

function sum (a, b) {
    return a+b;
  // your code to make the test pass goes here ...
}
function sub (a, b) {
  return a-b;
}
function mult (a, b) {
  return a*b;
}
test('sum should return the addition of two numbers', function (t) {
  t.equal(3, sum(1, 2)); // make this test pass by completing the add function!
  t.end();
});
test('sub should return the subtraction of two numbers', function (t) {
  t.equal(4, sub(6, 2));
  t.end();
});
test('mult should return the multiple of two numbers', function (t) {
  t.equal(12, mult(6, 2));
  t.end();
});