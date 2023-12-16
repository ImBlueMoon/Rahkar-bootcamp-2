const express =require('express')
const cors = require('cors');
const Logger = require('./middleware/Logger');
const BookRoutes = require('./router/bookRouter')

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api/book", BookRoutes)

// app.get('/', (req , res) => {
//   res.send('salam az / ke vared hich routi nashode')
// })

// app.get('/logger' , [Logger] , (req , res) => {
//   res.send('salam az Logger')
// })

app.listen(4000 , () => {
  console.log('4000 is ok');
})






