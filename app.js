const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'assets')));
app.set('port',(process.env.PORT || 8080));
app.listen(app.get('port'),function() {
	console.log('server started on port '+app.get('port'));
});
module.exports = app;