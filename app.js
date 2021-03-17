const express = require('express');
const mongoose  = require("mongoose");
const bodyParser = require('body-parser');
require("dotenv/config")
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

//mIDDLEWARE
// app.use("/posts", (res, req)=> {
//     console.log("This is a miidle ware")
// })

//Import routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);


//ROUTES
app.get('/', (req, res)=> {
    res.send("we work")
})

app.get('/posts', (req, res)=> {
    res.send("we work posts")
})

//connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
   
()=> console.log("connected to db"))

//listen
app.listen(4000);