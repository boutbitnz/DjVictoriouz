var express = require('express');
var app = express();
var path = require('path');

// __dirname will use the current path from where you run this file 
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '/Users/boutbitnz/dev/freelance/sites/DjVictoriouz/dj_victoriouz/index.html')));
// app.use(express.static(path.join(__dirname, '/FOLDERTOHTMLFILESTOSERVER')));

app.listen(8000);
console.log('Listening on port 8000');