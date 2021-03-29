const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;  // activity from the isotope’s identity
const HALF_LIFE_PERIOD= 5730;  // half life period t 1/2

module.exports = function dateSample(sampleActivity) {

  if(isNaN(sampleActivity)
      || typeof  sampleActivity !== 'string'
      || arguments.length == 0
      || sampleActivity <= 0
      || sampleActivity > 15) return false;
  let k = 0.693 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k) // t=ln(N0/N)/k
  return t;
};
