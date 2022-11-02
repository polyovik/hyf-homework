const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function calculateTime(travelInformation) {
    let timeCalculation = travelInformation.destinationDistance / travelInformation.speed;
    timeInHours = Math.floor(timeCalculation);
    let timeInMinutes = timeCalculation - timeInHours;
    timeInMinutes = Math.floor(timeInMinutes * 60)
    return `${timeInHours} hours and ${timeInMinutes} minutes`;
  }
  
  const travelTime = calculateTime(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes