var express = require('express');
var app = express();
var path = require('path');
var employeeName = require('./name');
var skill = require('./skill');
var sprint = require('./sprint');

app.set('port', (process.env.PORT || 5000));

//app.get('/data-request', function(req, res){
//    res.json({message: "hello"});
//});

app.get('/*', function(req, res){
    var file= req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public/", file));

});



app.listen(app.get('port'), function(){
    console.log("Listening on Port:" + app.get('port'));
});