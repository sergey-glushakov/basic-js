const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if(isNaN(date.getTime())){
    throw new Error();
  }

  if(!arguments.length) {
    return 'Invalid date';
  }

  let month = date.getMonth();
  
  switch (month) {
    case 11:
    case 0:
    case 1:  
      return 'winter';
    case 2:
    case 3:
    case 4:  
      return 'spring';
    case 5:
    case 6:
    case 7:  
      return 'summer';
    case 5:
    case 6:
    case 7:  
      return 'autumn';
  }

}

module.exports = {
  getSeason
};
