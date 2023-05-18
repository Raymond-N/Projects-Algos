// 1. PUSH FRONT

// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

// Examples:

// pushFront([5,7,2,3], 8) => [8,5,7,2,3]
// pushFront([99], 7) => [7,99]

function pushFront(arr,val){
    //need a for loop to shift values to right and leave open space at arr[0]
    for(let i = arr.length; i >= 0; i--){
        arr[i] = arr[i - 1];
    }
    arr[0] = val;
    console.log(arr);
    return arr;
}

pushFront([5,7,2,3], 8);
pushFront([99], 7);



// 2. POP FRONT
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

// Examples:

// popFront([0,5,10,15]) => 0 returned, with [5,10,15] printed in the function
// popFront([4,5,7,9]) => 4 returned, with [5,7,9] printed in the function

function popFront(arr){
    // save first value of array
    let temp = arr[0];
    // loop through array and shift values to left
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    console.log(temp);
    return temp;
}

popFront([0,5,10,15]);
popFront([4,5,7,9]);



// 3. INSERT AT
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

// Examples:

// insertAt([100,200,5], 2, 311) => [100,200,311,5]
// insertAt([9,33,7], 1, 42) => [9,42,33,7]

function insertAt(arr,idx,val){
    // from index you want to shift array to right
    for(let i = arr.length; i >= idx; i--){
        arr[i] = arr[i -1];
    }
    //at index you want to add value
    arr[idx] = val;
    console.log(arr);
    return arr;
}

insertAt([100,200,5], 2, 311);
insertAt([9,33,7], 1, 42);



// *BONUS: REMOVE AT *
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

// Examples:

// removeAt([1000,3,204,77], 1) => 3 returned, with [1000,204,77] printed in the function
// removeAt([8,20,55,44,98], 3) => 44 returned, with [8,20,55,98] printed in the function

function removeAt(arr,idx){
    // remove and return array value at index
    temp = arr[idx];
    // you want to run a loop that shifts array to the left and stopping at the index
    for(let i = idx; i < arr.length; i++){
        arr[i] = arr[i + 1];
    }
    // decrease length of array to remove unwanted value
    arr.length--;
    console.log(temp);
    console.log(arr);
    return temp;
}

removeAt([1000,3,204,77], 1);
removeAt([8,20,55,44,98], 3);



// *BONUS: SWAP PAIRS*
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

// Examples:

// insertAt([1,2,3,4]) => [2,1,4,3]
// insertAt(["Brendan",true,42]) => [true,"Brendan",42]

function swapInsertAt(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 1){
            let temp = arr[i];
            arr[i] = arr[i-1];
            arr[i-1] = temp;
        }
    }
    console.log(arr);
    return arr;
}

swapInsertAt([1,2,3,4]);
swapInsertAt(["Brendan",true,42]);


// * BONUS: REMOVE DUPLICATES

// Given a sorted array, remove duplicate values. Because array elements are already in order, 
// all duplicate values will be grouped together. If you already made the Remove At function, 
// you are welcome to use that! If you solved this using nested loops, for an extra challenge, 
// try to do it without any nested loops!

// Examples:

// removeDupes([-2,-2,3.14,5,5,10]) => [-2,3.14,5,10]
// removeDupes([9,19,19,19,19,19,29]) => [9,19,29]

function removeDupes(arr){
    // create empty array to hold new array without duplicates
    let newArr = [];
    // loop through given array
    for(let i = 0; i < arr.length; i++){
        // run a check here to see if index is the same as next index
        if(arr[i] != arr[i+1]){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
    return newArr;
}

removeDupes([-2,-2,3.14,5,5,10]);
removeDupes([9,19,19,19,19,19,29]);
