const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if(!Array.isArray(members)){
        return false
    }
    let secretName = [];
    members = members.filter(el => typeof el === 'string');
    members = members.map(el => el.trim().toUpperCase()).sort();
    members.forEach(el => secretName.push(el[0]));
    return secretName.join('');
};
