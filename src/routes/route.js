const express = require('express')
const {authors} = require('../Controller/authorController')
const {books, createBook, bookByIsbn, bookByEmail, sorted} = require('../Controller/bookController')
const {magazine, magazineByIsbn, magazineByEmail, createMagazine} = require('../Controller/magazinesController')


const router = express.Router()

router.get('/authors',authors)
router.get('/books',books)
router.post('/booksincsv',createBook)
router.get('/bookByIsbn/:isbn',bookByIsbn)
router.get('/bookByEmail/:email',bookByEmail)
router.get('/magazines',magazine)
router.get('/magazineByIsbn/:isbn',magazineByIsbn)
router.get('/magazineByEmail/:email',magazineByEmail)
router.post('/magazineincsv',createMagazine)
router.get('/booksandmagazines',sorted)

module.exports = router