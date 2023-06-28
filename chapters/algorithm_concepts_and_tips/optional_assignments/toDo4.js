// CHALLENGE 1
function extractDigit(num, digitNum) {
    if(digitNum < 0) {
        return Math.floor(num / Math.pow(10, digitNum)) % 10;
    } else if(digitNum < 1) {
        return Math.floor(num) % 10;
    } else if(digitNum >= 1) {
        return Math.floor(num / Math.pow(10, digitNum)) % 10;
    }
}
console.log(extractDigit(1824,2));
console.log(extractDigit(-1824,0));
console.log(extractDigit(1824,7));
console.log(extractDigit(123.45,-1));


// CHALLENGE 2
function mostSignificantDigit(num) {
    // return most siginifcant digit
    // *Hint: use WHILE to bring the most significant digit into a range where you can use the friendly modulus operator (%)
    // The most significant digit is the leftmost non-zero digit of a number
    while(num < 1 && num > 0 || num > -1 && num < 0) {
        num *= 10;
    }

    while(num >= 10 || num <= -10) {
        num = Math.floor(Math.abs(num) / 10);
    }
    return Math.floor(num);
}
console.log(mostSignificantDigit(12345));
console.log(mostSignificantDigit(67.89));
console.log(mostSignificantDigit(0.00987));
console.log(mostSignificantDigit(-12345));