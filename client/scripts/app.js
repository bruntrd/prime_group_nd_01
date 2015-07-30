$(document).ready(function(){
    $('body').on('click', '.generateProject', function(){
        $('body').children().last().remove();
        projectCompany=companyName[randomNumber(0,3)];
        clientSide = randomNumber(10,60);
        frontEnd = randomNumber(10,60);
        serverSide = randomNumber(10,60);
        $('body').append(build(stuff));
    });
    $('body').on('click','#btnAssign',function(){
        $(this).append("hey");
    });
});

var companyName = ["Dysfunction Function", "Berries Bananas", "Terminal", "Farmers Only"];


var clientSide;
var frontEnd;
var serverSide;

var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (1 + max - min) + min);
};



var stuff = "";
var build = function(stuff){
    stuff += "<div id='#project'>";
    stuff+= projectCompany;
    stuff+= clientSide;
    stuff+= frontEnd;
    stuff+= serverSide;
    stuff+="<button id='btnAssign'>Assign Staff</button>";
    stuff+= "</div>";

    return stuff;
}
