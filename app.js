const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const order = require('./routes/order')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/order',order)

 
app.listen(3000,()=> console.log('load page oke !'))


