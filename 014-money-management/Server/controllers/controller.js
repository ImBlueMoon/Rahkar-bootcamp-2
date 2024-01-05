const UserModel = require('../models/model')

exports.signUp = async (req , res) => {
  try {
    let result = await UserModel.signUp(req.body)
    res.json({message: "Your registration was successful , Good luck"},200)
  }catch(error) {
    res.json({message: "oops! signUp failed ... hahaha :) Do not try anymore "},201)
  }
}

exports.login = async (req , res) => {
  try {
    let result = await UserModel.login(req.body)
    res.json(result)
  }catch(error) {
    res.json({message: "oops! login failed ... hahaha :) Do not try anymore "},201)
  }
}


exports.addToMyWallet = async (req , res) => {
  try {
    let result = await UserModel.addToMyWallet(req.body)
    res.json(result)
  }catch(error) {
    res.json({message: "oops! adding money failed"},201)
  }
}
