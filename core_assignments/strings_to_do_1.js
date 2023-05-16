// 1. REMOVE BLANKS

// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"

function removeBlanks(str){
    // strings are immutable so make a new string w/o spaces
    let newStr = '';
    // loop through given string
    for(let i = 0; i < str.length; i++){
        if(str[i] != ' '){
            newStr += str[i];
        }
    }
    console.log(newStr);
    return newStr;
}

removeBlanks(" Pl ayTha tF u nkyM usi c ");
removeBlanks("I can not BELIEVE it's not BUTTER");



// 2. GET DIGITS

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680

function getDigits(str){
    //empty string to place digits into
    let newStr = '';
    //loop through given string
    for(let char in str){
        if(!isNaN(str[char])){
            newStr += str[char];
        }
    }
    console.log(newStr);
    return newStr;
}

getDigits("abc8c0d1ngd0j0!8");
getDigits("0s1a3y5w7h9a2t4?6!8?0");



// 3. ACRONYMS

// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".

function acronym(str){
    // create a new str
    let newStr = ' ';
    // split string into words
    let wordArray = str.split(" ");
    // loop through wordArray
    for(let word in wordArray){
        if(wordArray[word].length > 0){
            newStr += wordArray[word][0].toUpperCase();
        }
    }
    console.log(newStr);
    return newStr;
}

acronym(" there's no free lunch - gotta pay yer way. ");
acronym("Live from New York, it's Saturday Night!");



// 4. COUNT NON-SPACES

// Create a function that, given a string, returns the number of non-space characters found in the string. 

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11

function countNonSpaces(str){
    // establish count
    let count = 0;
    // loop through string
    for(let char in str){
        if(str[char] != ' '){
            count++;
        }
    }
    console.log(count);
    return count;
}

countNonSpaces("Honey pie, you are driving me crazy");
countNonSpaces("Hello world !");



// 5 REMOVE SHORTER STRINGS

// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']

function removeShorterStrings(arr,num){
    // returns array that only contains strings longer than or equal to given value
    // establish new string
    let newStr = [];
    // create index instead of using push
    let index = 0;
    // loop through given array
    for(let value in arr){
        if(arr[value].length >= num){
            newStr[index++] = arr[value];
        }
    }
    console.log(newStr);
    return newStr;
}

removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4);
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3);