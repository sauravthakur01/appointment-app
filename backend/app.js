const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./util/database');

const app =express();
app.use(cors());

app.use(bodyParser.json({extended:true}));

const userdetails = require('./routes/userDetails')

app.use('/user',userdetails);

sequelize.sync()
.then(result=>{
    app.listen(3000)
}).catch(err=>{
    console.log(err);
})
