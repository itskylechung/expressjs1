const express = require('express');
const router = express.Router();
const books = require('./books.json');

// Get all the books
router.get('/',(req,res) => {
    res.json(books);
})
// Get a specific book 
router.get('/:id',(req,res) => {
    const { id } = req,params;
    res.json(books.filter((ele) => ele.id === parseInt(id)));
});

router.post('/',(req,res) => {
    const body = req.body;
    console.log(body);
});

router.put('/:id',(req,res) => {
    const { id } = req,params;
    const body = req.body;
    books.forEach((book,index) => {
        if (book.id === parseInt(id)) {
            books[index];
        }
    });
    
    res.json({message:`The book with ID ${id} has been updated`});
});

router.delete('/:id',(req,res) => {
    const { id } = req.params;
    books.forEach((req,res) => {
        const { id } = req.params;
        books.forEach((book,index) => {
            if(book.id === paraseInt(id)) {
                books.splice(index);
            }
        });
    res.json({ message: `Book with id #${id} has been deleted` });
    })
})
