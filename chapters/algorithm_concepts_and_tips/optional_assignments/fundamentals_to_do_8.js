// CHALLENGE 1
    // Part I
function rollOne() {
    return Math.floor(Math.random() * 6) + 1;
}

// Part II
function playFives(num) {
    for(let i = 1; i <= num; i++) {
        const roll = rollOne();
        console.log(roll);
        if(roll === 5) {
            console.log("That's good luck!");
        }
    }
}

// Part III
function playStatistics() {
    let min = Infinity;
    let max = -Infinity;
    
    for (let i = 0; i < 8; i++) {
        const result = rollOne();
        min = Math.min(min, result);
        max = Math.max(max, result);
    }
    
    console.log(`Lowest value: ${min}`);
    console.log(`Highest value: ${max}`);
}

// Part IV
function playStatistics2() {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    
    for (let i = 0; i < 8; i++) {
        const result = rollOne();
        min = Math.min(min, result);
        max = Math.max(max, result);
        sum += result;
    }
    console.log(`Lowest value: ${min}`);
    console.log(`Highest value: ${max}`);
    console.log(`Sum: ${sum}`);
}

// Part V
function playStatistics3(num) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    
    for (let i = 0; i < num; i++) {
        const result = rollOne();
        min = Math.min(min, result);
        max = Math.max(max, result);
        sum += result;
    }
    console.log(`Lowest value: ${min}`);
    console.log(`Highest value: ${max}`);
    console.log(`Sum: ${sum}`);
}

// Part VI
function playStatistics4(num) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    let avg = 0;
    
    for (let i = 0; i < num; i++) {
        const result = rollOne();
        min = Math.min(min, result);
        max = Math.max(max, result);
        sum += result;
    }
    avg = sum / num;
    
    console.log(`Lowest value: ${min}`);
    console.log(`Highest value: ${max}`);
    console.log(`Average roll: ${avg}`);
}
console.log(rollOne()); // Part I
playFives(5); // Part II
playStatistics(); // Part III
playStatistics2(); // Part IV
playStatistics3(3); // Part V
playStatistics4(2); // Part VI


// CHALLENGE 2
    // 20 sided die
    // randomly return numbers 1-20
function rollNewDie() {
    return Math.floor(Math.random() * 20) + 1;
}
// track stats until number is rolled twice in a row
function rolledValueTwiceInARow(){
    // maybe have an array to store values of roll
    let rolls = 0;
    let prevRoll = null;
    let currentRoll = null;
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;

    do {
        prevRoll = currentRoll;
        currentRoll = rollNewDie();

        rolls++;
        min = Math.min(min, currentRoll);
        max = Math.max(max, currentRoll);
        sum += currentRoll;
    } while(currentRoll !== prevRoll);

    const avg = sum / rolls;

    console.log(`Rolls: ${rolls}`);
    console.log(`Min: ${min}`);
    console.log(`Max: ${max}`);
    console.log(`Average: ${avg}`);
}

// Display: ROLLS, MIN, MAX, and AVERAGE
console.log(rollNewDie());
rolledValueTwiceInARow();


// CHALLENGE 3
let x = 0;
let y = 0;

function reset() {
    x = 0;
    y = 0;
    return x, y;
}

function moveBy(xOffSet, yOffSet) {
    x += xOffSet;
    y += yOffSet;
    return x, y;
}

function xLocation() {
    return x;
}

function yLocation() {
    return y;
}

function distFromHome() {
    const distance = Math.sqrt((x ** 2) + (y ** 2));
    return distance;
}
console.log(reset());
console.log(moveBy(1, -2));
console.log(moveBy(3, 1));
console.log(xLocation());
console.log(yLocation());
console.log(distFromHome());


// CHALLENGE 4

    // Part I
function weekdayName(weekdayNum) {
    // given number between 1 - 7
    // console log string containing day of the week for that number
    // use a SWITCH statement
    let dayName;
    switch(weekdayNum) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
        default:
            dayName = "Unknown";
    }
    if(dayName === "Unknown") {
        console.log("Invalid weekday number. Please provide a number between 1 and 7.")
    } else {
        console.log(`Today is: ${dayName}`);
    }
}

function weekdayName2(dayNum) {
    // accept numbers up to '365'
    // return weekday like before
    // 'Sunday' still 1
    if(dayNum > 365) {
        console.log("Invalid day number. Please provide a number between 1 and 365.")
    }
    while(dayNum !== 0 && dayNum > 7) {
        dayNum -= 7;
    }
    let dayName;
    switch(dayNum) {
        case 1:
            dayName = "Sunday";
            break;
        case 2:
            dayName = "Monday";
            break;
        case 3:
            dayName = "Tuesday";
            break;
        case 4:
            dayName = "Wednesday";
            break;
        case 5:
            dayName = "Thursday";
            break;
        case 6:
            dayName = "Friday";
            break;
        case 7:
            dayName = "Saturday";
            break;
    }
    console.log(`Today is: ${dayName}.`);
    return dayName;
}

    // Part III
function someDays() {
    // calls weekDayName2() 17 times
    // w/ randomly generated integers as high as 365
    for(let i = 1; i <= 17; i++) {
        let result = weekdayName2(Math.floor(Math.random() * 365) + 1);
        console.log(result);
        if(result === "Sunday" || result === "Saturday") {
            console.log("Enjoy your day off !");
        } else {
            console.log("Work hard !");
        }
    }
    // log each result string
    // if it is a weekday add phrase 'Work hard!'
    // if weekend day add 'Enjoy your day off!'
}

    // Part IV
function monthName(monthNum) {
    // given number 1 to 12
    // return string containing month for that number
    // use array without loops
    const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    if(monthNum >= 1 && monthNum <= 12) {
        return monthNames[monthNum - 1];
    } else {
        return "Invalid month number. Please provide a number between 1 and 12.";
    }
}

    // Part V
// function monthToDays(monthNum) {
//     // return number of days for that month
//     switch(monthNum) {
//         case 1:
//             return 31;
//         case 2:
//             return 28;
//         case 3:
//             return 31;
//         case 4:
//             return 30;
//         case 5:
//             return 31;
//         case 6:
//             return 30;
//         case 7:
//             return 31;
//         case 8:
//             return 31;
//         case 9:
//             return 30;
//         case 10:
//             return 31;
//         case 11:
//             return 30;
//         case 12:
//             return 31;
//         default:
//             return "Invalid number. Please provide a number between 1 and 12.";
//     }
// }

    // Part VI
function dayToMonth(dayNum) {
    //given number 1 to 365
    if(dayNum >= 1 && dayNum <= 365) {
        if(dayNum <= 31) {
            return {
                monthName: "January",
                monthNum: 1,
                daysInMonth: 31,
                maxDaysInYear: 31
            };
        } else if(dayNum <= 59) {
            return {
                monthName: "February",
                monthNum: 2,
                daysInMonth: 28,
                maxDaysInYear: 59
            };
        } else if(dayNum <= 90) {
            return {
                monthName: "March",
                monthNum: 3,
                daysInMonth: 31,
                maxDaysInYear: 90
            };
        } else if(dayNum <= 120) {
            return {
                monthName: "April",
                monthNum: 4,
                daysInMonth: 30,
                maxDaysInYear: 120
            };
        } else if(dayNum <= 151) {
            return {
                monthName: "May",
                monthNum: 5,
                daysInMonth: 31,
                maxDaysInYear: 151
            };
        } else if(dayNum <= 181) {
            return {
                monthName: "June",
                monthNum: 6,
                daysInMonth: 30,
                maxDaysInYear: 181
            };
        } else if(dayNum <= 212) {
            return {
                monthName: "July",
                monthNum: 7,
                daysInMonth: 31,
                maxDaysInYear: 212
            };
        } else if(dayNum <= 243) {
            return {
                monthName: "August",
                monthNum: 8,
                daysInMonth: 31,
                maxDaysInYear: 243
            };
        } else if(dayNum <= 273) {
            return {
                monthName: "September",
                monthNum: 9,
                daysInMonth: 30,
                maxDaysInYear: 273
            };
        } else if(dayNum <= 304) {
            return {
                monthName: "October",
                monthNum: 10,
                daysInMonth: 31,
                maxDaysInYear: 304
            };
        } else if(dayNum <= 334) {
            return {
                monthName: "November",
                monthNum: 11,
                daysInMonth: 30,
                maxDaysInYear: 334
            };
        } else {
            return {
                monthName: "December",
                monthNum: 12,
                daysInMonth: 31,
                maxDaysInYear: 365
            };
        }
    } else {
        return "Invalid number. Please provide a number between 1 and 365."
    }
}

    // Part VII
function fullDate(dayNum) {
    //accept number of days so far in 2017
    const dayOfWeekNum = dayNum % 7;
    const dayOfWeek = weekdayName2(dayOfWeekNum);

    const month = dayToMonth(dayNum).monthName;

    const numOfDaysInMonth = dayToMonth(dayNum).daysInMonth;
    const maxDays = dayToMonth(dayNum).maxDaysInYear;
    const remainderDays = maxDays % dayNum;

    const day = numOfDaysInMonth - remainderDays;

    const year = 2017;

    return `${dayOfWeek}, ${month} ${day}, ${year}`;
}

function fullDate2(dayNum) {
    let year = 2017;
    let daysInYear = 365;

    while (dayNum > daysInYear) {
        if (year % 4 === 0) {
            daysInYear = 366;
        } else {
            daysInYear = 365;
        }
        dayNum -= daysInYear;
        year++;
    }

    // getting day of the week
    const dayOfWeekNum = dayNum % 7;
    const dayOfWeek = weekdayName2(dayOfWeekNum);

    // get month name
    const month = dayToMonth(dayNum).monthName;

    // get day of month
    const day = dayToMonth(dayNum).maxDaysInYear % dayNum;

    return `${dayOfWeek}, ${month} ${day}, ${year}`;

}
// weekdayName(7); // Part I
// weekdayName2(265); // Part II
// someDays(); // Part III
// console.log(monthName(1)); // Part IV
// console.log(monthToDays(12)); // Part V
// console.log(dayToMonth(48)); // Part VI
// console.log(fullDate(142)); // Part VII
// console.log(fullDate(257)); // Part VII
console.log(fullDate2(8476));