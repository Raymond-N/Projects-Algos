// CHALLENGE 1
let myNumber = 42;
let myName = "Raymond";
// console.log(myNumber);
console.log(myName);

// myNumber = myName;
// console.log(myNumber);
myName = myNumber;
console.log(myName);


// CHALLENGE 2
function printIntegers() {
    for (let i = -52; i < 1067; i++) {
        console.log(i);
    }
}
printIntegers();


// CHALLENGE 3
function beCheerful() {
    console.log("Good morning");
}
for (let i = 1; i < 99; i++) {
    beCheerful();
}


// CHALLENGE 4
function multiplesOfThree() {
    for (let i = -300; i < 1; i++) {
        if (i === -3 || i === -6) {
            continue;
        } else if (i % 3 === 0) {
            console.log(i);
        }
    }
}
multiplesOfThree();


// CHALLENGE 5
let num = 2000;
while (num < 5281) {
    console.log(num);
    num++;
}


//CHALLENGE 6
function itsYourBirthday(month,day) {
    if (month === 1 && day === 14) {
        console.log("It's your birthday!")
    } else {
        console.log("Just another day.")
    }
}
itsYourBirthday(1,14);
itsYourBirthday(5,20);


// CHALLENGE 7
function leapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                console.log("It's a Leap Year!");
            } else {
                console.log("Not a Leap Year.");
            }
        } else {
            console.log("It's a Leap Year!");
        }
    } else {
        console.log("Not a Leap Year.");
    }
}
leapYear(100);
leapYear(400);
leapYear(4);
leapYear(22);


// CHALLENGE 8
function printAndCount() {
    let count = 0;
    for (let i = 512; i < 4097; i++) {
        if (i % 5 === 0) {
            console.log(i);
            count++;
        }
    }
    console.log(`The count is ${count}!`);
}
printAndCount();


// CHALLENGE 9
let multOfSix = 6;
while (multOfSix <= 60000) {
    if (multOfSix % 6 === 0) {
        console.log(multOfSix);
    }
    multOfSix++;
}


// CHALLENGE 10
function dojoCount() {
    for (let i = 1; i < 101; i++) {
        if (i % 10 === 0 && i % 5 === 0) {
            console.log("Coding Dojo");
        } else if (i % 5 === 0) {
            console.log("Coding");
        } else {
            console.log(i);
        }
    }
}
dojoCount();


// CHALLENGE 11
function whatDoYouKnow(incoming) {
    console.log(incoming);
}
whatDoYouKnow("Hey there!");


// CHALLENGE 12
function addingOddInts() {
    let sum = 0;
    for (let i = -300000; i <= 300000; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    console.log(sum);
}
addingOddInts();


// CHALLENGE 13
function countDownByFour() {
    let startNum = 2016;
    while (startNum > 0) {
        console.log(startNum);
        startNum -= 4;
    }
}
countDownByFour();


// CHALLENGE 14
function flexibleCountdown(lowNum,highNum,mult) {
    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            console.log(i);
        }
    }
}
flexibleCountdown(2,9,3);


// CHALLENGE 15
function finalCountdown(param1,param2,param3,param4) {
    let start = param2;
    while (start <= param3) {
        if (start % param1 === 0 && start !== param4) {
            console.log(start);
        }
        start++;
    }
}
finalCountdown(3,5,17,9);