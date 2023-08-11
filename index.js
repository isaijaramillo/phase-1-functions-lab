function distanceFromHqInBlocks(pickUpLocation){
   if(pickUpLocation >= 42){
    return (pickUpLocation - 42) ;
   }else{
    return (42 - pickUpLocation)
   }
}

function distanceFromHqInFeet(feet) {
    const blocks = distanceFromHqInBlocks(feet);
    const feetPerBlock = 264;
    
    return blocks * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    let blocksTraveled;

    if (destination >= start) {
        blocksTraveled = destination - start;
    } else {
        blocksTraveled = start - destination;
    }

    return blocksTraveled * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);

    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
