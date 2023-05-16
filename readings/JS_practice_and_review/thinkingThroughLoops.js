function palindrome(myString) {
    length = myString.length;
    for (i = 0; i < length; i++) {
        console.log(myString[i], myString[length - 1 - i])
        if (myString[i] !== myString[length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(palindrome("mom"))



function palindrome(myString) {
    length = myString.length;
    for (i = 0; i < length/2; i++) {
        console.log(myString[i], myString[length - 1 - i])
        if (myString[i] !== myString[length - 1 - i]) {
            return false
        }
    }
    return true
}
console.log(palindrome("notapalindrome"))



function palindrome(myString){
    length = myString.length;
    for(i=length-1;i>=0;i--){
        console.log(myString[i], myString[length - 1 - i]);
        if (myString[i] !== myString[length - 1 - i]){
            return false
        }
    }
    return true
}
console.log(palindrome("mother"));