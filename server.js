//importing the nesscary modules to run the server
let express = require("express")
let bodyParser = require("body-parser")
let finance_api= require("./routes/finance.js")
//allows the server to run both the frontend and backend
let path = require('path')
let app = express()

app.use(express.static(path.join(__dirname,'client','dist')))

app.use(bodyParser.json())
//grabs the api from finance.js
app.use('/api', finance_api)

app.use(function(req,res,next){
	res.status(404).send("Not Found")
})

app.use(function(err,req,res,next){
	console.error(err.stack)
	res.status(500).send("Server Error")
})

let server = app.listen(process.env.PORT || 3000, function(){
	console.log("app running on port", server.address().port)

})
