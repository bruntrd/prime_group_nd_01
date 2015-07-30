var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};

var names = ["bob", "sam", "james", "ryan", "sarah"];

var getName = function(){
    var num =randomNumber(0,4);
    return names[num];
}

module.exports = getName;