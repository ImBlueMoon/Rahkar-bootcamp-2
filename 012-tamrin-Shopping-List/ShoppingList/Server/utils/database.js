const mysql = require('mysql2/promise')

class DataBase {

  constructor() {
    this.connection = undefined ;
    this.createConnection();
  }

  async createConnection() {
    this.connection = await mysql.createConnection ({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'shoppinglist'
    })
    // console.log('database connection is ok');
  }

}

module.exports = new DataBase()
