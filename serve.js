const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');



const app = express();

//db  config

const db = require('./config/keys').mongoURI;

//use routes
app.use('./api/users',users);
app.use('./api/profile',profile);
app.use('./api/posts',posts);

//connect to db

mongoose.connect(db,{
    useUnifiedTopology: true,
useNewUrlParser: true,
})
.then(()=>console.log("MOngo Db Connected"))
.catch(err => console.log(err));

app.get('/', (reg,res)=> res.send('Hello World'));



const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server Running on port ${port}`));