'use strict';
//Givin an array of forecasted maximum temperaturesm the thermometer display a string with these temperatures
//Example: [17,21,23] will print "...17C in 1 days, 21C in 2 days, 23C in 3 days"

const printForecast = forecastedTemperatures => {
  let result = '';
  for (let i in forecastedTemperatures) {
    result =
      result + `...${forecastedTemperatures[i]}C in ${Number(i) + 1} days.`;
  }
  console.log(result);
};

const forecastedTemperatures = [17, 21, 23];
const forecastedTemperatures2 = [12, 5, -5, 0, 4];

printForecast(forecastedTemperatures2);
