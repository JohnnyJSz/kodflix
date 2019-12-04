const express = require('express')
const app = express()
const port = 3000

const getMoviesData = require('./getMoviesData');

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.get('/rest/moviesData', (req, res) => res.send(getMoviesData))
