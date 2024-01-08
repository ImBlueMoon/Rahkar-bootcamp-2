const express = require('express')
const router = express.Router()
const { signUp , login , addToMyWallet , buyProduct } = require('../controllers/controller')


router.post('/signup', signUp)
router.post('/login', login)
router.post('/addtomywallet', addToMyWallet)
router.post('/buyproduct', buyProduct)

module.exports = router;
