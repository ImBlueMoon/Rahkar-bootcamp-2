const express = require('express')
const router = express.Router()
const { signUp , login , addToMyWallet } = require('../controllers/controller')


router.post('/signup', signUp)
router.post('/login', login)
router.post('/addtomywallet', addToMyWallet)

module.exports = router;
