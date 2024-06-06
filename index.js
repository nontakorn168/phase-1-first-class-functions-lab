// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    // Ensure the input is a valid array and has at least two drivers
    if (!Array.isArray(drivers) || drivers.length < 2) {
      return []; // Return an empty array if the input is invalid
    }
  
    // Return a new array containing the first two elements
    return [drivers[0], drivers[1]]; // Corrected array creation
  };

const returnLastTwoDrivers = (drivers) => {
    // Ensure the input is a valid array and has at least two drivers
    if (!Array.isArray(drivers) || drivers.length < 2) {
      return []; // Return an empty array if the input is invalid
    }
  
    // Return a new array containing the last two elements
    return [drivers[drivers.length - 2], drivers[drivers.length - 1]];
  };

  function createFareMultiplier(multiplier) {
    // Return a function that performs the multiplication
    return function(fare) {
      return fare * multiplier;
    };
  }

function fareDoubler(fare) {
    return fare *2 ;
    }

function fareTripler(fare) {
    return fare *3;
}

function selectDifferentDrivers(drivers, selectionFunction) {
    return selectionFunction(drivers); // Call the selection function and return its result
  }

  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];