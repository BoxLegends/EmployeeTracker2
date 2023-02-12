const inquirer = require('inquirer');
const {printTable} = require("console-table-printer")
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Nicholas11',
      database: 'emp_db',
    },
    console.log(`Connected to the Employee database.`)
  );



function menu() {
  inquirer.prompt([{
    type: 'list',
    message: 'Select an option',
    name: 'option',
    choices: [
    
        "view all departments", 
        "view all roles", 
        "view all employees", 
        "add a department", 
        "add a role", 
        "add an employee", 
        "update an employee role"
    ]

      
    }])
    .then(response =>{
        if(response.option === "view all departments" ){
            db.query("SELECT id, name as department_name from department ORDER BY name");
            
        }else if(response.option === "view all roles"){
            console.log("view all roles");
        }else if(response.option === "view all employees"){
            console.log("view all emp");
        }else if(response.option === "add a department"){
            console.log("view all dept");
        }else if(response.option === "add a role"){
            console.log("add a role");
        }else if(response.option === "add an employee"){
            console.log("add an employee");
        }
    })
}

menu();

    
