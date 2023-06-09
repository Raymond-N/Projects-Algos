// CHALLENGE 1
function onlyKeepTheLastFew(arr,num) {
    if(num >= arr.length) {
        return arr;
    }
    arr.splice(0,arr.length - num);
    return arr;
}
console.log(onlyKeepTheLastFew([2,4,6,8,10],3));


// CHALLENGE 2
function mathHelp(m,b) {
    let x = -b/m;
    console.log(x);
    return x;
}
mathHelp(2,5);


// CHALLENGE 3
function whatHappensToday() {
    let randNum = Math.floor(Math.random() * 100) + 1;
    console.log(randNum);

    if(randNum <= 10) {
        return "Volcano";
    } else if(randNum <= 25) {
        return "Tsunami";
    } else if(randNum <= 45) {
        return "Earthquake";
    } else if(randNum <= 70) {
        return "Blizzard";
    } else {
        return "Meteor"
    }
}
console.log(whatHappensToday());


// CHALLENGE 4
function whatReallyHappensToday() {
    let outcomes = [];
    if(Math.random() <= 0.1) {
        outcomes.push("Volcano");
    }
    if(Math.random() <= 0.15) {
        outcomes.push("Tsunami");
    }
    if(Math.random() <= 0.2) {
        outcomes.push("Earthquake");
    }
    if(Math.random() <= 0.25) {
        outcomes.push("Blizzard");
    }
    if(Math.random() <= 0.3) {
        outcomes.push("Meteor");
    }
    return outcomes;
}
console.log(whatReallyHappensToday());


// CHALLENGE 5
function soaringIQ(iQ,days) {
    let increase = days * 0.01;
    iQ += increase;
    return iQ;
}
console.log(soaringIQ(101,98));


// CHALLENGE 6 & CHALLENGE 7
function letterGrade(score) {
    let grade;
    if(score >= 90) {
        grade = "A";
        if(score >= 98) {
            grade += "+";
        } else if(score <= 92) {
            grade += "-";
        }
    } else if(score >= 80) {
        grade = "B";
        if(score >= 88) {
            grade += "+";
        } else if(score <= 82) {
            grade += "-";
        }
    } else if(score >= 70) {
        grade = "C";
        if(score >= 78) {
            grade += "+";
        } else if(score <= 72) {
            grade += "-";
        }
    } else if(score >= 60) {
        grade = "D";
        if(score >= 68) {
            grade += "+";
        } else if(score <= 62) {
            grade += "-";
        }
    } else if(score < 60) {
        grade = "F";
    }
    console.log(`Score: ${score} Grade: ${grade}`);
}
letterGrade(99);
letterGrade(95);
letterGrade(91);
letterGrade(88);
letterGrade(84);
letterGrade(80);
letterGrade(79);
letterGrade(77);
letterGrade(70);
letterGrade(68);
letterGrade(65);
letterGrade(60);
letterGrade(59);