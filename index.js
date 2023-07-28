const express = require('express');
const bodyParser = require('body-parser');
const db = require('./utils/DbConnection');

const app =  express();
//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
})

//routes
app.use('/teams', require('./routes/teams'));
app.use('/players', require('./routes/Players'));

//error handling

app.use((error, req, res, next) => {
    console.error('middleware',error);
    const status = error.statusCode || 500;
    const message = error.message || 'Something went wrong!'
    res.status(status).json({message: message })
})

db.sync().then(() =>{
    console.log('DB connected');
    app.listen(3000);
})
.catch((error) => console.error(error))
