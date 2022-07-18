const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
require('./models/db')
const User = require('./models/user')
const userRouter = require('./routes/user')

// app.use((req,res,next)=>{
//     req.on('data', chunk => {
//         const data = JSON.parse(chunk);
//         req.body = data;
//         next();
//     });
    
// });

app.use(express.json())
app.use(userRouter);

const test = async (email, password) => {
  const user = await User.findOne({email: email});
  const result = await user.comparePassword(password);
  
};

test('niraj@gmail.com','niraj12')
app.get('/test',(req,res,next)=>{
    res.send('test msg');
});




app.get('/',(req, res)=>{
    res.send('test')
});

app.listen(8000, ()=>{
    console.log('port is running at 8000')
});


