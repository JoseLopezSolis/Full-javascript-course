// Remember, we're gonna use strict mode in all scripts now!
//Givin an array calculate the temperature amplitude, keep in mind that sometimes are errors in the temperatures sensor.
('use strict');
/*
const getHighestTem = temperatures => {
  let max = temperatures[0];
  for (i in temperatures) {
    if (temperatures[i] > max) {
      max = temperatures[i];
    }
  }
  return max;
};

const getLowerTem = temperatures => {
  let low = temperatures[0];
  for (i in temperatures) {
    if (temperatures[i] < low) {
      low = temperatures[i];
    }
  }
  return low;
};

const calculateAmplitude = (t1, t2) => {
  const temperaturesArray = t1.concat(t2);
  let realTemperatures = new Array();
  let errorCount = 0;

  for (let i in temperaturesArray) {
    if (temperaturesArray[i] === 'error') errorCount++;
    if (temperaturesArray[i] !== 'error') {
      realTemperatures.push(temperaturesArray[i]);
    }
  }
  const highestTemperature = getHighestTem(realTemperatures);
  const lowerTemperature = getLowerTem(realTemperatures);

  const amplitude = highestTemperature - lowerTemperature;
  console.log(
    `The highest temperature were ${highestTemperature}🥵
    \nThe errors were ${errorCount}❌
    \nThe lower temperature were ${lowerTemperature} 🥶
    \nThe amplitud is ${amplitude} ✅`
  );
  return amplitude;
};

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [10, 20, 30, 40, 50, 60, 70, 80, 'error', 'error'];

const result = calculateAmplitude(temperatures1, temperatures2);
*/
/*
const getHighestTem = temperatures => {
  let max = temperatures[0];
  for (i in temperatures) {
    if (temperatures[i] > max) {
      max = temperatures[i];
    }
  }
  return max;
};

const getLowerTem = temperatures => {
  let low = temperatures[0];
  for (i in temperatures) {
    if (temperatures[i] < low) {
      low = temperatures[i];
    }
  }
  return low;
};

const calculateAmplitude = (t1, t2) => {
  const temperaturesArray = t1.concat(t2);
  let realTemperatures = new Array();
  let errorCount = 0;

  for (let i in temperaturesArray) {
    if (temperaturesArray[i] === 'error') errorCount++;
    if (temperaturesArray[i] !== 'error') {
      realTemperatures.push(temperaturesArray[i]);
    }
  }
  const highestTemperature = getHighestTem(realTemperatures);
  const lowerTemperature = getLowerTem(realTemperatures);

  const amplitude = highestTemperature - lowerTemperature;
  console.log(
    `The highest temperature were ${highestTemperature}🥵
      \nThe errors were ${errorCount}❌
      \nThe lower temperature were ${lowerTemperature} 🥶
      \nThe amplitud is ${amplitude} ✅`
  );
  return amplitude;
};

const temperatures1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [10, 20, 30, 40, 50, 60, 70, 80, 'error', 'error'];

const result = calculateAmplitude(temperatures1, temperatures2);
*/
