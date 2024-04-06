const express = require('express');
const bodyParser = require("body-parser");
const studentRoute = require('./routes/students')
const mongoose = require('mongoose');
const app = express()
const port = 3000


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/api/students", studentRoute);

app.get('/', (req, res) => {
  res.send('Hello World anosh!')
})

//connected to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/saylani')
  .then(() =>{
     console.log('Connected!');
     app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
      })
  })
  .catch((err)=>{
    console.log(err)
  })