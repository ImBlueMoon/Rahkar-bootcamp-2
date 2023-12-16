const express = require('express') ;
const router = express.Router() ;
const { GetBooks } = require('../controler/bookControler')

// router.get("/book/:id" , GetBooks)
router.get("/:id" , GetBooks)

module.exports = router ;
