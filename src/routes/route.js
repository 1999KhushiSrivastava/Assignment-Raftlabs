const express = require('express')
const {authors} = require('../Controller/authorController')
const {books, createBook} = require('../Controller/bookController')
const {magazine} = require('../Controller/magazinesController')


const router = express.Router()

router.get('/authors',authors)
router.get('/books',books)
router.get('/magazines',magazine)
router.post('/booksincsv',createBook)

module.exports = router