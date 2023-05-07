// CHALLENGE 1

/*
    Given a number, return a boolean indicating whether the number is even.
*/

// MY SOLUTION
// isEven = (num) => {
//     if(num % 2 === 0) {
//         return true
//     }
//     return false
// }

// BETTER SOLUTION
isEven = (num) => num % 2 === 0;

console.log(isEven(2) ? 'pass' : 'fail'); 
console.log(!isEven(57) ? 'pass' : 'fail'); 
console.log(isEven(0) ? 'pass' : 'fail'); 