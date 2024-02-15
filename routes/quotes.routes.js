const express = require("express")

const router = express.Router()

const {getQuote} = require('../controllers/quotes.controller')

router.route('/quotes').get(getQuote)

module.exports = router