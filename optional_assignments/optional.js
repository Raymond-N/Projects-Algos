// MIN TO FRONT

// Given an array of comparable values, move the lowest element to array’s front, 
// shifting backward any elements previously ahead of it. Do not otherwise change the 
// array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, 
// do this without using built-in functions.

function minToFront(arr) {
    // loop through array
    for(let i = 0; i < arr.length; i++) {
        // have MIN start at arr[0]
        let min = arr[0];
        // run check to see if new index in loop is less than arr[0]
        if(arr[i] < arr[0]){
            min = arr[i];
        }
        // I can run another loop here to shift array
        for(let i = arr.length - 1; i >= 0; i--){
            arr[i] = arr[i+1];
        }
        //insert MIN at front of array
        arr[0] = min;
    }
    console.log(arr);
    return arr;
}

minToFront([4,1,2,3,5]);