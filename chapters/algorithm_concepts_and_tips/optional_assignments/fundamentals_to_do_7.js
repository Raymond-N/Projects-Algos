// CHALLENGE 1
function sweatshirtPricing(num) {
    // 1 = $20
    // 2 = 9% discount
    // 3 = 19% discount
    // 4 = 35% discount
    // Round up to nearest dollar
    if(num < 1) {
        return 0
    } else if(num === 1) {
        return 20;
    } else if(num === 2) {
        return Math.ceil((20 * 2) - ((20 * 2) * (9 / 100)));
    } else if(num === 3) {
        return Math.ceil((20 * 3) - ((20 * 3) * (19 / 100)));
    } else if(num >= 4) {
        return Math.ceil((20 * num) - ((20 * num) * (35 / 100)));
    }
}
console.log(sweatshirtPricing(1));
console.log(sweatshirtPricing(2));
console.log(sweatshirtPricing(3));
console.log(sweatshirtPricing(4));
console.log(sweatshirtPricing(5));


// CHALLENGE 2
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

    console.log(`Hour hand: ${Math.floor(hourAngle)} degs.`);
    console.log(`Minute hand: ${Math.floor(minuteAngle)} degs.`);
    console.log(`Second hand: ${Math.floor(secondAngle)} degs.`);
    console.log(`Week hand: ${Math.floor(weekAngle)} degs.`);
    // *As a review, 360 degrees form a full rotation. For input of 3600 secs (equivalent to 1:00:00), print "Hour hand: 30 degs. Minute hand: 0 degs. Second hand: 0 degs."*
        // In this case, hour hand goes to 1
        // 1 = 5
        // (5 / 60) * 360 = degrees
}
clockHandAngles(3600.45);
clockHandAngles(119730.567);
clockHandAngles(604800.789);