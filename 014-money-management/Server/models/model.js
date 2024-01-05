const db = require("../utils/database");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 11;
const secret = "94522203";

class USerModel {

  async signUp(userData) {

    try {
      var {mobile , password} = userData

      let queryFindUser = "SELECT * FROM users WHERE mobile=?"
      let [data] = await db.connection.execute(queryFindUser, [mobile])

      if(data.length !== 0) {
        throw new Error("This user already exist ! _ sign-up-Model")
      }

      let salt = await bcrypt.genSaltSync(saltRounds)
      let hashedPassword = await bcrypt.hashSync(password , salt)

      let querySignUp = "INSERT INTO users (mobile, password) VALUES (? , ?)"
      let result = await db.connection.execute(querySignUp, [mobile , hashedPassword])

      return result
    }catch(error) {
      console.log(error.messag);
      throw new Error ("We have Error here ! _ sign-up-Model")
    }
  }


  async login(userData) {
    let {mobile , password} = userData

    let searchQuery = "SELECT * FROM users WHERE mobile=? ";
    let [user] = await db.connection.execute(searchQuery, [mobile]);
    // console.log(user);
    if (user.length === 0) {
      throw new Error("user not found")
    }

    const isPasswordValid = await bcrypt.compareSync(password, user[0].password);

    if (isPasswordValid) {
      const token = jwt.sign({
        "mobile":mobile,
        "id":user[0].id
      }, secret , { expiresIn: "1h" });

      // console.log(user[0].id);
      return token;
    } else {
      throw new Error("Invalid credentials")
    }
  }


  async addToMyWallet(userData) {

    try {
      var {id , bujet} = userData
      console.log(userData);
      let queryAddBujet = "INSERT INTO wallet  (user_id , amount_wallet) VALUES (? , ?)"
      let [data] = await db.connection.execute(queryAddBujet, [id , bujet])
      return data
    }catch(error) {
      throw new Error ("We have Error here ! _ addToMyWallet-Model")
    }
  }


}

module.exports = new USerModel()
