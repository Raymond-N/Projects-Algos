function threesFives() {
    let sum = 0;
    for(let i = 100; i <= 4000000; i++) {
        if(i % 5 === 0 || i % 3 === 0) {
            // console.log(i);
            sum += i;
        }
    }
    return sum;
}
console.log(threesFives());

function betterThreesFives(start,end) {
    let sum = 0;
    for(let i = start; i <= end; i++) {
        if(i % 5 === 0 || i % 3 === 0) {
            sum += i;
        }
    }
    return sum;
}
console.log(betterThreesFives(100,4000000));


// CHALLENGE 2
function generateCoinChange(cents) {
    const dollars = Math.floor(cents / 100);
    const halfDollars = Math.floor((cents % 100) / 50);
    const quarters = Math.floor((cents % 100) % 50 / 25);
    const dimes = Math.floor((cents % 100) % 50 % 25 / 10);
    const nickels = Math.floor((cents % 100) % 50 % 25 % 10 / 5);
    const pennies = Math.floor((cents % 100) % 50 % 25 % 10 % 5 / 1);

    console.log(`${cents} cents represented by:`);
    console.log(`Dollars: ${dollars}`);
    console.log(`Half-dollars: ${halfDollars}`);
    console.log(`Quarters: ${quarters}`);
    console.log(`Dimes: ${dimes}`);
    console.log(`Nickels: ${nickels}`);
    console.log(`Pennies: ${pennies}`);
}
generateCoinChange(394);


// CHALLENGE 3
function messyMath(num) {
    // return the following sum: add all integers from 0 up to the given num
    let sum = 0;

    for(let i = 0; i <= num; i++) {
        if(i === num / 3) {
            return -1;
        } else if(i % 3 === 0) {
            continue;
        } else if(i % 7 === 0) {
            sum += i * 2;
        } else {
            sum += i;
        }
    }
    return sum;
    // except for the following special cases of our count value:
        // 1. If current count (not num) is evenly divisible by 3, don’t add to the sum; skip to the next count
        // 2. Otherwise, if the current count is evenly divisible by 7, include it twice in sum instead of once
        // 3. Regardless of the above, if the current count is exactly 1/3 of num, return -1 immediately.
}
// For example, if given num is 4, return 7. If given num is 8, return 34. If given num is 15, return -1.
console.log(messyMath(4));
console.log(messyMath(8));
console.log(messyMath(15));


// CHALLENGE 4
function twelveBarBlues() {
    const cycle = ["chick", "boom", "chick"];
    for(let i = 1; i <= 12; i++) {
        console.log(i);
        console.log(cycle[0]);
        console.log(cycle[1]);
        console.log(cycle[2]);
    }
}
twelveBarBlues()


// CHALLENGE 5
function fibonacci(index) {
    if(index === 0) {
        return 0;
    } else if(index === 1) {
        return 1;
    } else {
        let prevPrev = 0;
        let prev = 1;

        for(let i = 2; i <= index; i++) {
            let current = prevPrev + prev;
            prevPrev = prev;
            prev = current;
        }
        return prev;
    }
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
console.log(fibonacci(7));


// CHALLENGE 6
function sumToOne(num) {
    while(num > 9) {
        let sum = 0;

        while(num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        num = sum;
    }
    return num;
}
console.log(sumToOne(928));


// CHALLENGE 7
function clockHandAngles(seconds) {
    // given a number of seconds since 12:00:00, prints angles (in degrees) of the hour, minute and second hands
    // second hand: 60 seconds full rotation
    // minute hand: 60 minutes full rotation === 3600 seconds full rotation
    // hour hand: 12 hours full rotation === 720 minutes full rotation === 43,200 seconds full rotation

    let hourAngle = (seconds / 43200) * 360; // get the angle of the hour hand
    let minuteAngle = (seconds / 3600) * 360; // get the angle of the minute hand
    let secondAngle = (seconds / 60) * 360; // get the angle of the second hand at that moment
    let weekAngle = (seconds / (7 * 24 * 60 * 60)) * 360;

    hourAngle %= 360; // get angles between 0 and 360
    minuteAngle %= 360; 
    secondAngle %= 360;
    weekAngle %= 360;

    console.log(`Hour hand: ${hourAngle.toFixed(3)} degs.`);
    console.log(`Minute hand: ${minuteAngle.toFixed(3)} degs.`);
    console.log(`Second hand: ${secondAngle.toFixed(3)} degs.`);
    console.log(`Week hand: ${weekAngle.toFixed(3)} degs.`);
    // *As a review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs."*
        // In this case, hour hand goes to 1
        // 1 = 5
        // (5 / 60) * 360 = degrees
}
clockHandAngles(3600);
clockHandAngles(119730);
clockHandAngles(604800);


// CHALLENGE 8
function isPrime(num) {
    // we have a given number
    // we can run a loop starting at 1 and ending at given number
    // we can check to see if num is divisible by i
    // if it is we can add it to array
    // we can check if array has more than 2 nums
    // if 2 nums "should be a prime number?"
    let arr = [];
    for(let i = 1; i <= num; i++) {
        if(num % i === 0) {
            arr.push(i);
        }
    }
    if(arr.length === 2) {
        return `${num} is a Prime Number!`;
    } else {
        return 'Not a Prime Number! Try again.';
    }
}
console.log(isPrime(47));