const express = require('express')
const router = express.Router()
const Book = require('../models/book')

router.get('/', async(req, res) => {
    try{
        const books = await Book.find()
        res.json(books)

    }catch(err){
        res.send('Error'+ err)
    } 
 })

 router.get('/:id', async(req, res) => {
    try{
        const books = await Book.findById(req.params.id)
        res.json(books)

    }catch(err){
        res.send('Error'+ err)
    }
 })

 router.post('/', async(req,res) => {
     const book = new Book({
         name: req.body.name,
         isbn: req.body.isbn,
         author: req.body.author,
         price: req.body.price,
         available: req.body.available
     })

    try{
        const bookSave = await book.save()
        res.json(bookSave)

    }catch(err){
        res.send('Error'+ err)
    }
 })

 router.put('/:id', async(req,res) =>{
     const book = {
        name: req.body.name,
        isbn: req.body.isbn,
        author: req.body.author,
        price: req.body.price,
        available: req.body.available
     };

     try{
        const bookUpdate = await Book.findByIdAndUpdate(req.params.id, { $set: book }, { new: true })
        res.json(bookUpdate)

    }catch(err){
        res.send('Error'+ err)
    }
 })

 router.delete('/:id', async(req,res) => {
    try{
        const books = await Book.findOneAndRemove(req.params.id)
        res.json(books)

    }catch(err){
        res.send('Error'+ err)
    }
 })

 module.exports = router