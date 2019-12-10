const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');
const getMoviesData = require('./getMoviesData');

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/rest/moviesData', (req, res) => res.send(getMoviesData));


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

