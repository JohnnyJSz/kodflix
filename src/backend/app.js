const express = require('express');
const app = express();
const port = 3001;

const getMoviesData = require('./getMoviesData');
app.get('/rest/moviesData', (req, res) => res.send(getMoviesData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

