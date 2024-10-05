const express = require("express");
const { logReqRes } = require('./middleware/index');
const userRouter = require("./routes/user");
const {connectMongoDb} = require('./connection');

const app = express();
const PORT = 8000;

//Connection

connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1");


//Middleware - plugin

app.use(express.urlencoded({extended: false}));

app.use(logReqRes("log.txt"));

//routes

app.use("/api/users", userRouter);



app.listen(PORT, ()=> console.log(`Server Started at PORT ${PORT}`));