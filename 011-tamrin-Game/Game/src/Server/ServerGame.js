const express = require('express') ;
const cors = require('cors') ;
const app = express() ;

app.use(cors())

let player = [];

app.post('/sendName' , (req , res) => {

  const {name1 , name2} = req.body
  player.push({name:name1},{name:name2})
  res.send('data save shooooood ')
})


app.get('/', (req , res) => {

  var data = [
    {
      id : 1 ,
      name:'kamal',
      score : '0'
    },
    {
      id : 2 ,
      name : 'mohammad',
      score : '0'
    },
  ]
  res.json(data)
})


app.get('/randomNumber', (req , res) => {

  var randomNumber = Math.floor(Math.random()*6)+1
  res.json(randomNumber)
})


app.listen(4000 , () => {
  console.log('4000 is ok');
})
