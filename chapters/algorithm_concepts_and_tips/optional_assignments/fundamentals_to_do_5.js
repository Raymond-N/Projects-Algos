// CHALLENGE 1
function sigma(num) {
    let sum = 0;
    for(let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
console.log(sigma(5));
console.log(sigma(3) );


// CHALLENGE 2
function factorial(num) {
    let product = 1;
    for(let i = 1; i <= num; i++) {
        product *= i;
    }
    return product;
}
console.log(factorial(3));
console.log(factorial(5));


// CHALLENGE 3
function drawLeftStars(num) {
    let stars = "";
    for(let i = 0; i < num; i++) {
        stars += "*";
    }
    console.log(stars);
}

function drawRightStars(num) {
    let spaces = "";
    let stars = "";

    for(let i = 0; i < 75 - num; i++) {
        spaces += " ";
    }

    for(let i = 0; i < num; i++) {
        stars += "*";
    }

    console.log(spaces + stars);
}

function drawCenteredStars(num) {
    let spaces = "";
    let stars = "";
    let leftSpaces = Math.floor((75 - num) / 2);

    for(let i = 0; i < leftSpaces; i++) {
        spaces += " ";
    }

    for(let i = 0; i < num; i++) {
        stars += "*";
    }

    console.log(spaces + stars);
}

drawLeftStars(5);
drawRightStars(7);
drawCenteredStars(9);


// CHALLENGE 4
function drawLeftChars(num,char) {
    let chars = "";
    for(let i = 0; i < num; i++) {
        chars += char;
    }
    console.log(chars);
}

function drawRightChars(num,char) {
    let spaces = "";
    let chars = "";

    for(let i = 0; i < 75 - num; i++) {
        spaces += " ";
    }

    for(let i = 0; i < num; i++) {
        chars += char;
    }

    console.log(spaces + chars);
}

function drawCenteredChars(num,char) {
    let spaces = "";
    let chars = "";
    let leftSpaces = Math.floor((75 - num) / 2);

    for(let i = 0; i < leftSpaces; i++) {
        spaces += " ";
    }

    for(let i = 0; i < num; i++) {
        chars += char;
    }

    console.log(spaces + chars);
}
drawLeftChars(5,"h");
drawRightChars(7,"f");
drawCenteredChars(9,"r");