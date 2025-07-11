// speed limit = 70
// speed<= 70 -> "ok"
// 5km above speed limit -> 1 point
// 12 points -> license suspended
//Math.floor(1.3)


checkSpeed(150);

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;
    if (speed < speedLimit + kmPerPoint){
        console.log("Ok");
    }

    else {
        let points = Math.floor((speed - speedLimit)/ kmPerPoint);
        if (points >= 12){
            console.log("License Suspended");
        }
        else {
            console.log("points", points);
        }

    }

}
