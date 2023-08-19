// PRACTICE 1
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];
// your code here!
// loop through array
for(let i = 0; i < numbers.length; i++) {
    // run check to see if number at arr[i] is positive
    if(numbers[i] > 0) {
        // add to countPositives
        countPositives++;
    }
}
console.log("there are " + countPositives + " positive values");


// EXAMPLE 1
var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);

// EXAMPLE 2
var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x);
var result = addToX(-10);
console.log(result);
console.log(x);

// EXAMPLE 3
function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) {
        var right = arr.length-1-left;
        if(arr[left] != arr[right]) {
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1);
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2);

//EXAMPLE 4
function palindrome(myString) {
    length = myString.length;

    // for (i = 0; i < length; i++)

    //stop as soon as not met
    // for (i = 0; i < length/2; i++)

    // loop backwards
    for(i = length - 1; i >= 0; i--){
        console.log(myString[i], myString[length - 1 - i])
        if (myString[i] !== myString[length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(palindrome("mother"))


//EXAMPLE 5
//Nested Loop
for(var j = 0; j < 5; j++){
    var str = "";
    for(var i = 0; i < 5; i++){
        str += "$";
    }
    console.log(str);
}


//EXAMPLE 6
//Nested Arrays
var arr2d = [ [2, 5, 8],
              [3, 6, 1],
              [5, 7, 7] ];
    
// We can console.log the `8` in this array if we console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array
console.log(arr2d[0][2]);  
    
// We can loop through these nested arrays with nested for loops!
for(var i=0; i < arr2d.length; i++) {
    for(var j=0; j < arr2d[i].length; j++) {
	console.log(arr2d[i][j]);
    }
}
// How would a t-diagram look for this example?