const express = require('express')
const cors = require('cors')
const app = express()
const router = require('./routes/routes')

app.use(cors())
app.use(express.json())


app.use('/api/user' , router)


app.listen(5000 , ()=> {
  console.log('Port 5000 is working');
})
