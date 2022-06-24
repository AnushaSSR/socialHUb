//not to be overridden
const express = require('express');

const app=express();

const port = 8000; 


//use express

app.use('/', require('./routes'));

//setup view engine, for view setup
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log(`Error: ${err}`);
    }

    console.log(`done!, Port is up and running: ${port}`);
});