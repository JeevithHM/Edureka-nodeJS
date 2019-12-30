const express = require('express');
// create object and add port
const fs = require('fs');
// fs.readFile('./data/db.json',(err,result)=> {
//     if(err){

//         throw err;
//     }else {
//         console.log(JSON.parse(result))
//     }

// })

// fs.appendFile('./data/mytext.txt','my text read file\n',(err)=> {
//     if(err){
//         throw err;
//     }else {
//         console.log("DAat written succesfully")
//     }

// })
const app = express();
const port = 6500;

// Define default route with express
app.get('/',(req,res) => {
    res.send('<h1> Welcome to express server</h1>')
})


// Read file using express server
app.get('/getMovies', (req,res) => {
    fs.readFile('./data/db.json',(err,result) => {
        if(err){
            throw err;
        }else {
            res.send(JSON.parse(result))
        }
    })
})











// Create server to listen on port
app.listen(port,(err) => {
    console.log('server is running on port '+port);
})

