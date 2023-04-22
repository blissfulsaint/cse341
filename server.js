const express = require('express');
const app = express();
const port = process.env.port || 3000;
// const mongoose = require('mongoose');

// require('dotenv').config();


// mongoose.connect(`mongodb://${process.env.DB_NAME}:${process.env.DB_PASS}@ds241658.mlab.com:41658/test_db`,(err)=>{
//     if(err) throw err;
//     console.log("DB Connected Successfully");
// })

app.use('/',require('./routes'));

app.listen(port, ()=>{
    console.log(`Server Running on port ${port}`);
})

// app.get('/test', function (req, res) {
//     res.send('Hello World');
// });