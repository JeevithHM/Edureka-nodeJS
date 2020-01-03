const express = require('express');
const app = express();
const request = require('request')
const port = 3000;
const fs = require("fs")
const fetch = require("node-fetch");

app.get('/',(req,res)=> {
    res.send("api is working")
});

app.get('/employee/:id', (req,res) => {
    const id = req.params.id
    console.log(id)
    let employee = null
    fs.readFile('employe.json', (err,result) => {
        if(err) throw err;
        data=JSON.parse(result)
        console.log(data)
        for (let i=0; i<data.length; i++){
            if(data[i].employee_id == id){
                employee = data[i]
                break
            }
        }
        if(employee){
            res.json(employee)
        }else{
            res.status(404).json({
                msg: 'Employee Not found'
              })
        }
    })
});

app.get('/project/:id', (req,res) => {
    const id = req.params.id
    console.log(id)
    let project = null
    fs.readFile('projects.json', (err,result) => {
        if(err) throw err;
        data=JSON.parse(result)
        console.log(data)
        for (let i=0; i<data.length; i++){
            if(data[i].project_id == id){
                project = data[i]
                break
            }
        }
        if(project){
            res.json(project)
        }else{
            res.status(404).json({
                msg: 'Projects Not found'
              })
        }
    })
});



app.get('/getemployeedetails/:id', async (req,res) => {
    const id = req.params.id
    const employeeUrl = "http://localhost:3000/employee/" + id 
    console.log("employeeUrl: ", employeeUrl)
    try {
        const response = await fetch(employeeUrl);
        const employee = await response.json();
        
        const projectUrl  = "http://localhost:3000/project/" + employee.project_id
        const response1 = await fetch(projectUrl);
        const project = await response1.json();
        
        const result = {
            ...employee,
            ...project,
        }
        console.log("result: ", result)
        res.send(result)
      } catch (error) {
        console.log("getData: ",error);
      }
});
app.listen(port,(err)=>{
    if(err) {console.log("error in apic call")}
    else { console.log('app i srunning '+port)}

});