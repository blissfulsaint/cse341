const express = require('express');
const app = express();
const port = process.env.port || 8080;

const mongodb = require("./db/connect");
mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});

app.use('/',require('./routes'));

// app.listen(port, ()=>{
//     console.log(`Server Running on port ${port}`);
// })