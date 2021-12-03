const fs = require('fs');
const {EOL} = require('os');

const dupeArr = (arr) => arr.map( nested => Array.isArray(nested) ? dupeArr(nested) : nested) 

const getMostCommon = (input) => {
  const half = Math.ceil(input.length / 2);
  return input.filter(val => val === 1).length >= half ? 1 : 0;
}

const parseIntFromBinary = (input) => {
  return parseInt(input.toString(),2)
}

const invertNestedArray = (arr) => {
  let flipped = [];
  for (let ix = 0; ix < arr[0].length; ix++) {
    flipped[ix] = arr.map(val => parseInt(val[ix]));
  }
  return flipped
}

const algorithm1 = (values) => {
  const flipped = invertNestedArray(values);

  const gamma = flipped.map(val => getMostCommon(val));
  const epsilon = gamma.map(val => val ? 0 : 1);
  return  [parseIntFromBinary(gamma.join('')), parseIntFromBinary(epsilon.join(''))];
};

const solve2 = (arr, bit, most) => {
  const flipped = invertNestedArray(arr);
  const common = getMostCommon(flipped[bit]);

  const filtered = most ? arr.filter(val => parseInt(val[bit]) === common) : arr.filter(val => parseInt(val[bit]) !== common);

  if(filtered.length === 1 || bit + 1 === arr[0].length) {
    return parseIntFromBinary(filtered[0]);
  } else {
    return solve2(filtered, bit+1, most)
  }
}

const algorithm2 = (values) => {

  let oxygen = solve2(values, 0, true);
  let carbonDioxide = solve2(values, 0, false);

  return [oxygen, carbonDioxide];
}


const inputFile = fs.readFileSync('input-1.txt','utf8');

const data = inputFile.split(EOL);

const [gamma, epsilon] = algorithm1(data);

console.log(`Gamma:\t${gamma}\nEpsilon:\t${epsilon}`);
console.log(`Result:\t${gamma * epsilon}`);

const [o2,co2] = algorithm2(data);

console.log(`O2:\t${o2}\nCO2:\t${co2}`);
console.log(`Result:\t${o2 * co2}`);

module.exports =  {parseIntFromBinary, algorithm1, getMostCommon, algorithm2};
