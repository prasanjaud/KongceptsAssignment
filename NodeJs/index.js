const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/BookShop'
const cors = require('cors')

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected!')
})

app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }))

const controller = require('./Controller/BookController')
app.use('/books', controller)

app.listen(9000, () => {
    console.log('Server Stated')
})