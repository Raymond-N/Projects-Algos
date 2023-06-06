// CHALLENGE 1
function makeItBig(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            arr[i] = "big";
        }
    }
    console.log(arr);
    return arr;
}
makeItBig([-1,3,5,-5]);


// CHALLENGE 2
function printLowReturnHigh(arr) {
    let low = arr[0];
    let high = arr[0];
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < low) {
            low = arr[i];
        } else if(arr[i] > high) {
            high = arr[i];
        }
    }
    console.log(`Low: ${low}`);
    return high;
}
console.log(printLowReturnHigh([2,5,7,9,3]));


// CHALLENGE 3
function printOneReturnAnother(arr) {
    let secondToLastValue = arr[arr.length - 2];
    let oddValue = null;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0) {
            oddValue = arr[i];
            break;
        }
    }

    if(secondToLastValue !== undefined) {
        console.log(`Second to last value: ${secondToLastValue}`);
    } else {
        console.log("Array does not have second to last value.")
    }

    if(oddValue !== null) {
        return oddValue;
    } else {
        console.log("Array does not have an odd value.")
        return null;
    }
}
console.log(printOneReturnAnother([2, 4, 7, 10, 11]));


// CHALLENGE 4
