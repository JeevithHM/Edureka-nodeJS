var fs = require('fs')
var flist = 'FilesList.txt'
var firstRun = true
var fnames = []

function readContent(callback) {
    fs.readFile(flist, 'utf-8', function (err, content) {
        if (err) return callback(err)
        callback(null, content)
    })
}

if (fs.existsSync(flist)) firstRun = false
console.log("firstRun : ", firstRun)

if( !firstRun ){
   
    readContent(function (err, content) {
        if(err) throw err;
        //console.log("content: ",content)
        fnames = content.split(",")
        console.log("fnames: ",fnames)
        console.log('Enter Filename : ')
    })
}

var user_input = process.stdin;
var found = false
user_input.setEncoding('utf-8');
user_input.on('data', function(data) { 
    //Removes all 3 types of line breaks
    data = data.replace(/(\r\n|\n|\r)/gm,"");
    found = fnames.includes(data)
    if(found){
        console.log(data, "existing, try again !")
    }else{
        fnames.push(data)
        fs.writeFile(data,'You are awesome', function(err){
            if(err) throw err;          
        })
        fs.writeFile(flist, fnames, function(err){
            if(err) throw err;  
        })
    }
    console.log("fnames: ", fnames)
    console.log('Enter Filename : ')
})