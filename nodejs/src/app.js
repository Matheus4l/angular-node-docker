const express = require('express');
const mongose = require('mongoose');
const routes  = require('./routes')
const requireDir = require('require-dir');
const cors = require('cors')
//inicia o serve node
const app = express();

app.use(cors())
app.use(express.json())


mongose.connect('mongodb+srv://matheus4l:4m8a5t2h3e@cluster0.slzpi.mongodb.net/SysTotvs?retryWrites=true&w=majority',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useFindAndModify: false})
//iniciando bd

app.use('/api',routes)


app.listen(3080);