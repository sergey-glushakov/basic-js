const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const obj = {};
  const timeSec = 3600;
  obj.turns = (2**disksNumber - 1); // min turns
  obj.seconds = Math.floor((obj.turns * timeSec)/turnsSpeed); // min seconds/turnsSpeed
  return obj;
};
