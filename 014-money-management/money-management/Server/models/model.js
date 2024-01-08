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
      const token = jwt.sign({"mobile":mobile , "id":user[0].id}, secret , { expiresIn: "1h" });
      // console.log(user[0].id);
      return token;
    } else {
      throw new Error("Invalid credentials")
    }
  }


  async addToMyWallet(userData) {

    try {
      var {token , amountOfMoney} = userData
      // console.log(userData);

      /* first we shoud decode our token */
      var tokenDecoded = jwt.decode(token)
      // console.log(tokenDecoded);
      // console.log(tokenDecoded.id);

      var user_id = tokenDecoded.id


      /* Finding out if there is a User with this ID in the "Table: wallet" or not */
      let querryFindUserById = "SELECT * FROM wallet WHERE user_id=?"
      let [user] = await db.connection.execute(querryFindUserById, [user_id]);


      /* If there is no such User, we must first enter his/her ID in the table and then add the amount of money */
      if (user.length === 0) {
        let queryAddMoney = "INSERT INTO wallet  (user_id , amount_wallet) VALUES (? , ?)"
        var [data] = await db.connection.execute(queryAddMoney, [user_id , amountOfMoney])
      } else {
        /* The user with this ID exists in the "Table: wallet", so we just need to update his money amount */
        let querryGetAmountOfMoneyFromTable = "SELECT * FROM wallet WHERE user_id=?"
        let [user] = await db.connection.execute(querryGetAmountOfMoneyFromTable , [user_id])

        /* Now We have to add the previous amount of money with the money received from the front
        and then insert result in the table */
        let existMoney = user[0].amount_wallet
        let finalMoney = existMoney + amountOfMoney

        let queryAddMoney = "UPDATE wallet SET amount_wallet=? WHERE user_id=?"
        var [data] = await db.connection.execute(queryAddMoney, [finalMoney , user_id])
      }

      /* now we should insert our data in the "Table: transactions" too */
      let type = "Add"
      let title = "افزایش اعتبار"
      let querryAddDataIntoTransactionTable = "INSERT INTO transactions (user_id , amount , type , title) VALUES (? , ? , ? , ?)"
      let [transAction] = await db.connection.execute(querryAddDataIntoTransactionTable , [user_id,amountOfMoney,type,title])
      return transAction,data
    }catch(error) {
      throw new Error ("We have Error here ! _ addToMyWallet-Model")
    }
  }



  async buyProduct(userData) {
    try {
      var {token , title , amountOfMoney } = userData
      var tokenDecoded = jwt.decode(token)
      var user_id = tokenDecoded.id
      let type = "Buy"
      // console.log(userData);


      /* Finding out if there is a User with this ID in the "Table: wallet" or not */
      let querryFindUserById = "SELECT * FROM wallet WHERE user_id=?"
      let [user] = await db.connection.execute(querryFindUserById, [user_id]);


      /* Let's check if the wallet has any money or not */
      if (user.length === 0) {
        throw new Error ("Your wallet has no money at all ! First you need to increase your credit _ buyProduct-Model")
      } else {
        /* The user with this ID exists in the "Table: wallet", so we just need to update his money amount */
        let querryGetAmountOfMoneyFromTable = "SELECT * FROM wallet WHERE user_id=?"
        let [user] = await db.connection.execute(querryGetAmountOfMoneyFromTable , [user_id])

        /* We have to check whether there is enough money or not , if yes then we can update his/her wallet money amount*/
        let existMoney = user[0].amount_wallet
        if (existMoney < amountOfMoney) {
          throw new Error ("Your money is not enough to buy this product ! _ buyProduct-Model_")
        }else {
          let finalMoney = existMoney - amountOfMoney
          let queryAddMoney = "UPDATE wallet SET amount_wallet=? WHERE user_id=?"
          var [data] = await db.connection.execute(queryAddMoney, [finalMoney , user_id])


          /* inser data in the "Table: transactions " */
          let querryAddData = "INSERT INTO transactions (user_id , amount , type , title) VALUES (? , ? , ? , ?)"
          var [transActions] = await db.connection.execute(querryAddData , [user_id , amountOfMoney , type , title])
        }
      }
      return transActions,data
    }catch(error) {
      // console.log(error);
      throw new Error (error)
    }
  }






  // async buyProductssss(userData) {
  //   try {
  //     // var {token , title , amountOfMoney } = userData
  //     // /* 2 meghdar "tokenDecoded" & "user_id" dar bala tarif shodan pas man oonha ro dar inja tarif nemikonam */
  //     // var tokenDecoded = jwt.decode(token)
  //     // var user_id = tokenDecoded.id
  //     // let type = "Buy_Products"
  //     // console.log(userData);

  //     /* inser data in the "Table: transactions " */
  //     let querryAddData = "INSERT INTO transactions (user_id , amount , type , title) VALUES (? , ? , ? , ?)"
  //     let [transActions] = await db.connection.execute(querryAddData , [user_id , amountOfMoney , type , title])
  //     console.log("transAction ok");

  //     // /* Finding out if there is a User with this ID in the "Table: wallet" or not */
  //     // let querryFindUserById = "SELECT * FROM wallet WHERE user_id=?"
  //     // let [user] = await db.connection.execute(querryFindUserById, [user_id]);

  //     // /* If there is no such User, we must first enter his/her ID in the table and then add the amount of money */
  //     // if (user.length === 0) {
  //     //   let queryAddMoney = "INSERT INTO wallet  (user_id , amount_wallet) VALUES (? , ?)"
  //     //   var [data] = await db.connection.execute(queryAddMoney, [user_id , amountOfMoney])
  //     // } else {
  //     //   /* The user with this ID exists in the "Table: wallet", so we just need to update his money amount */
  //     //   let querryGetAmountOfMoneyFromTable = "SELECT * FROM wallet WHERE user_id=?"
  //     //   let [user] = await db.connection.execute(querryGetAmountOfMoneyFromTable , [user_id])

  //     //   /* Now We have to add the previous amount of money with the money received from the front
  //     //   and then insert result in the table */
  //     //   let existMoney = user[0].amount_wallet
  //     //   if (existMoney < amountOfMoney) {
  //     //     throw new Error ("Your money is not enough to buy this product ! _ buyProduct-Model")
  //     //   }else {
  //     //     let finalMoney = existMoney - amountOfMoney
  //     //     let queryAddMoney = "UPDATE wallet SET amount_wallet=? WHERE user_id=?"
  //     //     var [data] = await db.connection.execute(queryAddMoney, [finalMoney , user_id])
  //     //   }
  //     // }
  //     return transActions,data
  //   }catch(error) {
  //     console.log(error);
  //     throw new Error ("We have Error here ! _ buyProduct-Model")
  //   }
  // }

}

module.exports = new USerModel()
