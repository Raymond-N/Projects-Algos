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
function double(arr) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    console.log(newArr);
    return newArr;
}
double([1,2,3]);


// CHALLENGE 5
function countPositives(arr) {
    count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] >= 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    console.log(arr);
    return arr;
}
countPositives([-1,1,1,1]);


// CHALLENGE 6
function evensAndOdds(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            console.log("That's odd!");
        } else if(arr[i] % 2 === 0 && arr[i + 1] % 2 === 0 && arr[i + 2] % 2 === 0) {
            console.log("Even more so!");
        }
    }
}
evensAndOdds([1, 3, 5, 2, 4, 6, 7, 8, 9]);
evensAndOdds([2, 4, 6, 1, 3, 5, 8, 10, 12]);
evensAndOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]);


// CHALLENGE 7
function incrementTheSeconds(arr) {
    for(let i = 0; i < arr.length; i++) {
        if(i % 2 !== 0) {
            arr[i] += 1;
        }
        console.log(arr[i]);
    }
    console.log(arr);
    return arr;
}
incrementTheSeconds([1,3,5,7,9,11]);


// CHALLENGE 8
// keep working!
function previousLengths(arr) {
    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i - 1].length;
    }
    return arr;
}
const array = ['apple', 'banana', 'orange', 'kiwi'];
const modifiedArray = previousLengths(array);
console.log(modifiedArray);