const express = require("express")
const app = express()
const cors =require("cors")
const PORT = 4000
const listRoutes = require('./routes/listRoutes')

app.use(cors())
app.use(express.json())

app.use('/api/list', listRoutes)

app.listen(PORT , () => {
  console.log("Port 4000 is ok");
})
