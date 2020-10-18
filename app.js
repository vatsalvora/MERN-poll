//mongodb+srv://admin:<password>@mern-poll-db.phflm.mongodb.net/<dbname>?retryWrites=true&w=majority
const express = require("express");
const app = express();
const bodyParser = require('body-parser');

const PollsRouter = require('./polls/routes.config');

app.use(express.static("public"));

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Expose-Headers', 'Content-Length');
    res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    } else {
        return next();
    }
});


app.get("/", function(req,res) {
	res.send("<h1>Hello World!</h1>")
})

app.use(bodyParser.json());
PollsRouter.routesConfig(app);

app.listen(process.env.port || 3000, 
	() => console.log("server is running..."));