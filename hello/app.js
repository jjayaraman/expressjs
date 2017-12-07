const express = require('express')
const app = express()

// Simple server
app.listen(3000, function(){
    console.log('Server started and listening on 3000 port...');
})

// Routes
app.get('/', function(req,res){
    res.send('This is my home page..');
})

app.get('/1', function(req,res){
    res.send('This is page 1 updated');
})

app.get('/2', function(req,res){
    res.send('This is page 2');
})

