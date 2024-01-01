const ListModel = require('../models/list.model')


exports.addList = async (req , res) => {
  try {
    let result = await ListModel.addList(req.body)
    // console.log('addList works well');
    res.json({message: "your add request was successful"},200)
  }catch(error) {
    // console.log('addList is not ok');
    res.json({message: "ops !!! This title already exist - list-Controller-Add !!!"},201)
  }
}


exports.getLists = async (req , res) => {
  try {
    let result = await ListModel.getLists()
    res.json({result},200)
  }catch(error) {
    res.json({message: "ops !!! u have an error - list-Controller-Get !!!"},400)
  }
}


exports.getList = async (req , res) => {
  try {
    let result = await ListModel.getList(req.params.id)
    res.json({result},200)
  }catch(error) {
    res.json({message: "ops !!! u have an error - list-Controller-Get !!!"},400)
  }
}


exports.changeListStatus = async (req , res) => {
  try {
    let result = await ListModel.changeListStatus(req.params.id)
    res.json({message: "you changed the status of selected list successfully"},200)
  }catch(error) {
    res.json({message: "ops !!! u have an error - change-List-Status-Controller !!!"},400)
  }
}


exports.deleteList = async (req , res) => {
  try {
    let result = await ListModel.deleteList(req.params.id)
    res.json({message: "your selected list deleted successfully"},200)
  }catch(error) {
    res.json({message: "ops !!! u have an error - delete-List-Controller !!!"},400)
  }
}


exports.editListTitle = async (req , res) => {
  try {
    let result = await ListModel.editListTitle(req.body.title,req.params.id)
    res.json({message: "you changed the title of selected list successfully"},200)
  }catch(error) {
    res.json({message: "ops !!! u have an error - change-List-Title-Controller !!!"},400)
  }
}
