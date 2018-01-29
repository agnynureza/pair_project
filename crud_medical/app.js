const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const Medical = require('./routes/medical')
// app.get('/', (req, res) => res.send('Hello World!'))
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use('/medicals', Medical)


app.listen(3000, () => console.log('Example app listening on port 3000!'))