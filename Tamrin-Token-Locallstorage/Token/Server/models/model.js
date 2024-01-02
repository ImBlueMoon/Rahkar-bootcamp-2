const db = require("../utils/database");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 11;
const secret = "94522203";

class USerModel {

  async signUp(userData) {

    try {
      var {name , password} = userData

      let queryFindUser = "SELECT * FROM users WHERE name=?"
      let [data] = await db.connection.execute(queryFindUser, [name])

      if(data.length !== 0) {
        throw new Error("This user already exist ! _ sign-up-Model")
      }

      let salt = await bcrypt.genSaltSync(saltRounds)
      let hashedPassword = await bcrypt.hashSync(password , salt)

      let querySignUp = "INSERT INTO users (name, password) VALUES (? , ?)"
      let result = await db.connection.execute(querySignUp, [name , hashedPassword])

      return result
    }catch(error) {
      console.log(error.messag);
      throw new Error ("We have Error here ! _ sign-up-Model")
    }
  }


  async login(userData) {
    let {name , password} = userData

    let searchQuery = "SELECT password FROM users WHERE name=?";
    let [user] = await db.connection.execute(searchQuery, [name]);

    if (user.length === 0) {
      throw new Error("user not found")
    }

    const isPasswordValid = await bcrypt.compareSync(password, user[0].password);

    if (isPasswordValid) {
      const token = jwt.sign({ name , password }, secret , { expiresIn: "12h" });
      // console.log(token);
      return token;
    } else {
      throw new Error("Invalid credentials")
    }
  }


}

module.exports = new USerModel()
