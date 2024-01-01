const express = require('express')
const router = express.Router()
const { addList , getLists , getList , changeListStatus , deleteList , editListTitle } = require('../controllers/list.controller')

router.post("/add" , addList)
router.get("/get" , getLists)
router.get("/get/:id" , getList)
router.get("/status/:id" , changeListStatus)
router.delete("/delete/:id" , deleteList)
router.put("/edit/:id" , editListTitle)


module.exports = router
