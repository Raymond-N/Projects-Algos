// CHALLENGE 1
function countdown(num) {
    let arr = [];
    for(let i = num; i >= 0; i--) {
        arr.push(i);
    }
    console.log(arr);
    return arr;
}
countdown(9);


// CHALLENGE 2
function printAndReturn(arr) {
    const firstValue = arr[0];
    const secondValue = arr[1];
    console.log(`First value: ${firstValue}`);
    return secondValue;
}
const numbers = [3, 7];
const result = printAndReturn(numbers);
console.log(`Returned value: ${result}`);


// CHALLENGE 3
function firstPlusLength(arr) {
    const sum = arr[0] + arr.length;
    console.log(`Sum: ${sum}`);
    return sum;
}
firstPlusLength([1,2,3,4,5,6,7]);


// CHALLENGE 4
function valuesGreaterThanSecond(arr) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > arr[1]) {
            console.log(arr[i]);
            count++;
        }
    }
    console.log(`Count: ${count}`);
    return count;
}
valuesGreaterThanSecond([3,1,6,5,3,2,5]);


// CHALLENGE 5
function valuesGreaterThanSecondGeneralized(arr) {
    let newArr = [];
    if(arr.length > 1) {
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > arr[1]) {
                newArr.push(arr[i]);
            }
        }
        console.log(newArr);
        return newArr;
    } else {
        console.log("Array length must be greater than 1!");
        return null;
    }
}
valuesGreaterThanSecondGeneralized([3,1,6,5,3,2,5]);
valuesGreaterThanSecondGeneralized([1]);


// CHALLENGE 6
function thisLengthThatValue(num1,num2) {
    let arr = [];
    if(num1 !== num2) {
        for(let i = 1; i <= num1; i++) {
            arr.push(num2);
        }
        console.log(arr);
        return arr;
    } else {
        console.log("Jinx!")
    }
}
thisLengthThatValue(5,7);
thisLengthThatValue(3,3);


// CHALLENGE 7
function fitTheFirstValue(arr) {
    if(arr[0] > arr.length) {
        console.log("Too big!");
    } else if(arr[0] < arr.length) {
        console.log("Too small!");
    } else {
        console.log("Just right!")
    }
}
fitTheFirstValue([10,2,3]);
fitTheFirstValue([1,2,3,4,5,6]);
fitTheFirstValue([2,2]);


// CHALLENGE 8
function fahrenheitToCelsius(fDegrees) {
    const celsius = (fDegrees - 32)*(5/9);
    console.log(`${celsius} degrees celsius`);
    return celsius;
}
fahrenheitToCelsius(80);


//CHALLENGE 9
function celsiusToFahrenheit(cDegrees) {
    const fahrenheit = ((9/5)*cDegrees) + 32;
    console.log(`${fahrenheit} degrees fahrenheit`);
    return fahrenheit;
}
celsiusToFahrenheit(30);