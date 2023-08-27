console.log('Assignment 5');
function checkEvenArray(arr) {
  try {
    if (arr.every(num => num % 2 === 0)) {
      console.log('Even Array');
    } else {
      throw new Error('Array contains odd numbers');
    }
  } catch (error) {
    console.log(error.message);
  } finally {
    arr.length = 0;
  }
}

// Test Arrays
let testArray1 = [1, 2, 3, 4, 5];
let testArray2 = [2, 4, 6, 8, 10];
let testArray3 = [2, 4, 6, 8, 41];

// Testing the function
checkEvenArray(testArray1);  // Output: Array contains odd numbers
console.log(testArray1);  // Output: []

checkEvenArray(testArray2);  // Output: Even Array
console.log(testArray2);  // Output: []

checkEvenArray(testArray3);  // Output: Array contains odd numbers
console.log(testArray3);  // Output: []
