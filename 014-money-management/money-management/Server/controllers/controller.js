const UserModel = require('../models/model')

exports.signUp = async (req , res) => {
  try {
    let result = await UserModel.signUp(req.body)
    res.json({message: "Your registration was successful , Good luck"},200)
  }catch(error) {
    res.json({message: "oops! signUp failed ... hahaha :)"},400)
  }
}

exports.login = async (req , res) => {
  try {
    let result = await UserModel.login(req.body)
    res.json(result,200)
  }catch(error) {
    console.log(error.message);
    res.json({message: "oops! login failed ... Invalid credentials _ مقادیر وارد شده نامعتبر هستند"},400)
  }
}


exports.addToMyWallet = async (req , res) => {
  try {
    let result = await UserModel.addToMyWallet(req.body)
    res.json({message: "adding money was successful"},200)
  }catch(error) {
    console.log(error.message);
    res.json({message: "oops! adding money failed"},201)
  }
}


exports.buyProduct = async (req , res) => {
  try {
    let result = await UserModel.buyProduct(req.body)
    res.json({message: "buying product was successful"},200)
  }catch(error) {
    res.json({message: error.message},400)
  }
}
