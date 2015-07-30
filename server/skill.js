var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var skills = ["Front End", "Client Side", "Server Side"];

var getSkill = function(){
    var num = randomNumber(0,3);
    return skills[num];
};

module.exports = getSkill();