/*Write a JavaScript function that takes in a random array and outputs two new arrays of odd numbers and even numbers.
Example:
Input: [2, 4, 7, 11, 15, 16]

Output: Even numbers: [2, 4, 16]
	  Odd Numbers: [7, 11, 15]
 
 */

function splitOddAndEven(numbers) {
    let odd = []; //an array for the odd numbers 
    let even = []; //an array for the even numbers 
  
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        // number is even
        even.push(numbers[i]);
      } else {
        // number is not even (=odd)
        odd.push(numbers[i]);
      }
    }
  
    // create an object with the odd and even array in it
    const returnObject = {
      odd,
      even,
    };
  
    return returnObject;
  }

  console.log(splitOddAndEven([1, 2, 3]));