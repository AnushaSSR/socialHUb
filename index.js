//not to be overridden
const express = require('express');

const app=express();

const port = 8000; 


//use express

app.use('/', require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
    }

    console.log(`done!, Port is up and running: ${port}`);
});