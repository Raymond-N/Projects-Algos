/* MIN TO FRONT

Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.
*/

function minToFront(arr) {
    // first: declare the index of the minValue as 0
    let minIndex = 0;
    // loop through array to check for smaller values at other indexes
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < arr[minIndex]) {
            minIndex = i;
        }
    }
    // declare minValue
    const minValue = arr[minIndex];
    // loop to shift array starting at index to replace minValue
    for(let i = minIndex; i > 0; i--) {
        arr[i] = arr[i-1];
    }
    // move minValue to front by declaring arr[0] to minValue
    arr[0] = minValue;
    return arr;
}
console.log(minToFront([4,2,1,3,5]));