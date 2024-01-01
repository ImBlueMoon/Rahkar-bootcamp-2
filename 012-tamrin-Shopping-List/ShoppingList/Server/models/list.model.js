const db = require ("../utils/database")


class ListModel {


  async addList(list){
    try {
      // let title = list.title
      const {title} = list

      let queryFindList = "SELECT * FROM lists WHERE title=?"
      let [data] = await db.connection.execute(queryFindList, [title])

      if(data.length !== 0) {
        throw new Error("This title already exist ! - add-List-title-Model")
      }

      let query = "INSERT INTO lists (title) VALUES (?)"
      let res = await db.connection.execute(query , [title])
      return res
    }catch(error) {
      console.log(error.message);
      throw new Error("we have Error here ! - add-List-Model")
    }
  }


  async getLists(){
    try {
      let query = "SELECT * FROM lists"
      let [data] = await db.connection.execute(query)
      return data
    }catch(error) {
      console.log(error.message);
      throw new Error("we have Error here ! - get-Lists-Model")
    }
  }


  async getList(id){
    try {
      let query = "SELECT * FROM lists WHERE id=?"
      let [data] = await db.connection.execute(query, [id])
      return data
    }catch(error) {
      console.log(error.message);
      throw new Error("we have Error here ! - get-one-List-Model")
    }
  }


  async changeListStatus(id){
    try {
      let queryFindList = "SELECT * FROM lists WHERE id=?"
      let [data] = await db.connection.execute(queryFindList, [id])

      if(data.length === 0) {
        throw new Error("We could not find this title ! - change-List-Status-Model")
      }

      let queryChangeStatus = "UPDATE lists SET isDone=? WHERE id=?"
      await db.connection.execute(queryChangeStatus, [!data[0].isDone,id] )
      return true
    }catch(error) {
      console.log(error.message);
      throw new Error("we have Error here ! - change-List-Status-Model")
    }
  }


  async deleteList(id){
    try {
      let queryFindList = "SELECT * FROM lists WHERE id=?"
      let [dataFind] = await db.connection.execute(queryFindList, [id])

      if(dataFind.length === 0) {
        throw new Error("We could not find this title ! - delete-List-Model")
      }

      let queryDeleteList = "DELETE FROM lists WHERE id=?"
      await db.connection.execute(queryDeleteList, [id])
      return true
    }catch(error) {
      console.log(error.message);
      throw new Error("we have Error here ! - delete-List-Model")
    }
  }


  async editListTitle(title,id){
    try {
      let queryFindList = "SELECT * FROM lists WHERE id=?"
      let [data] = await db.connection.execute(queryFindList, [id])

      if(data.length === 0) {
        throw new Error("We could not find this title ! - Edit-List-Title-Model")
      }

      let queryChangeTitle = "UPDATE lists SET title=? WHERE id=?"
      await db.connection.execute(queryChangeTitle, [title,id] )
      return true
    }catch(error) {
      console.log(error.message);
      throw new Error("we have Error here ! - Edit-List-Title-Model")
    }
  }


}

module.exports = new ListModel()
