const express = require('express')

const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

let PORT = process.env.port || 3000

app.listen(PORT, ()=>{console.log("Listening on port: " + PORT)})

app.get('/', (req,res) => {
    console.log("get working")
    res.json({
        messages: 'notes application'
    })
})

//configurating the database
const dbConfig = require('./config/database.config')
const mongoose = require('mongoose')

mongoose.Promise = global.Promise 

//connecting to Database
mongoose.connect(dbConfig.url,{
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(() => {
    console.log("Succesfully connected to the data")
})
.catch(err=>{
    console.log ("Could not conncet to the database", err)
    process.exit()
})