var express = require('express');

var fs = require('fs');

var app = express.createServer(express.logger());


var buf = fs.readFileSync('index.html', encoding='utf8', function (err, data) {
    if (err) throw err;
    return data;
});

app.get('/', function(request, response){
    response.send(buf);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
