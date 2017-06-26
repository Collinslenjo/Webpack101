const express = require('express');
const app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/',function(req,res){
	res.render('index.html');
});

app.listen(3000,function(){
	console.log('local development server started on **localhost:3000**');
});

module.exports = app;