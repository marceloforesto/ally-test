const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + 'dist/allytest-client-angular'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/dist/allytest-client-angular');
});

app.listen(PORT, function() {
    console.log('Our app is running on ' + PORT);
});