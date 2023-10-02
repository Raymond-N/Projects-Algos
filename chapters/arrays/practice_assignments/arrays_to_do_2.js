/* REVERSE

Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
*/

function reverse(arr) {
    // loop through given array
    // divide arr.length / 2 to stop loop halfway through array
    for(let i = 0; i < arr.length/2; i++) {
        // swap first index with last
        // make it so last index will increment as well
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
console.log(reverse([5,6,7,8]));



/* ROTATE

Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
change the array to [3,1,2]. Don't use built-in functions.
Second: allow negative shiftBy (shift L, not R).
Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
Fourth: minimize the touches of each element.
*/

function rotateArr(arr, shiftBy) {
    // lets regulate shift so that if shiftBy is larger than arr.length we can get a value that is easier to use as shiftBy in function
    // lets also run if check to see if shiftBy is negative
    // create variable for actual shifts
    let shift = 0;
    // if shiftBy is positive 
    if(shiftBy > 0) {
        shift = shiftBy % arr.length;
    } else {
        // if shiftBy is negative
        shift = Math.abs(shiftBy) % arr.length;
    }
    // run this loop is shiftBy is positive
    if(shiftBy > 0) {
        // loop through given array by the amount of times necessary
        for(let i = 0; i < shift; i++) {
            // temp value will hold last value in array
            let temp = arr[arr.length-1];
            // shift values to RIGHT once
            for(let j = arr.length-2; j >= 0; j--) {
                // make next value = to previous value in array
                arr[j+1] = arr[j]; 
            }
            // shift last value of the array to the front
            arr[0] = temp;
            /* check movement of the array
            console.log(arr);*/
        }
    } else {
        // run this loop if shift by is negative
        for(let i = 0; i < shift; i++) {
            // temp value will hold first value in array
            let temp = arr[0];
            // shift values to the LEFT once
            for(let j = 1; j < arr.length; j++) {
                arr[j-1] = arr[j];
            }
            //shift first value to last value in array
            arr[arr.length-1] = temp;
        }
    }
    return arr;
}
console.log(rotateArr([1,2,3], 1));
console.log(rotateArr([1,2,3,4,5], 2));
console.log(rotateArr([1,2,3], -1));
console.log(rotateArr([1,2,3,4,5], -2));




/* FILTER RANGE

Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
*/

function filterRange(arr, min, max) {
    // create a base for the while loop
    let i = 0;
    let j = 0;

    // loop through array
    while(i < arr.length) {
        // run a conditional to check arr[i] is between the range
        if(arr[i] >= min && arr[i] <= max) {
            // make arr[j] = to the number at arr[i]
            arr[j] = arr[i];
            // increment j
            j++;
        }
        // increment i
        i++;
    }
    // shorten array to eliminate values outside of range
    arr.length = j;

    return arr;
}
console.log(filterRange([1,2,3,4,5,6,7,8,9], 3, 7));


/* CONCAT

Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].
*/

function arrConcat(arr1, arr2) {
    // create new array to hold all elements
    let newArray = [];

    // loop through arr1 and add values to newArray
    for(let i = 0; i < arr1.length; i++) {
        newArray[newArray.length] = arr1[i];
    }

    // loop through arr2 and add values to newArray
    for(let j = 0; j < arr2.length; j++) {
        newArray[newArray.length] = arr2[j];
    }

    return newArray;
}
console.log(arrConcat([1,2,3,4,5], [6,7,8,9,10]));