//mongodb+srv://admin:<password>@mern-poll-db.phflm.mongodb.net/<dbname>?retryWrites=true&w=majority
const express = require("express")
const app = express()

app.use(express.static("public"))


app.get("/", function(req,res) {
	res.send("<h1>Hello World!</h1>")
})

app.listen(process.env.port || 3000, 
	() => console.log("server is running..."));