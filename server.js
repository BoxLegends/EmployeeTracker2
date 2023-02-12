const inquirer = require('inquirer');
const {printTable} = require("console-table-printer")
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Nicholas11',
      database: 'emp_db',
    }
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
            viewDepartment();

        }else if(response.option === "view all roles"){
            viewRole();

        }else if(response.option === "view all employees"){
            viewEmployee();
            
        }else if(response.option === "add a department"){
            
        }else if(response.option === "add a role"){
           
        }else if(response.option === "add an employee"){
           
        }
    })
}

function viewDepartment() {  
    db.query("select * from department", function(err, data){
      printTable(data)
      menu()
    })
}

function viewEmployee() {
    db.query("select * from employee", function(err, data){
      printTable(data)
      menu()
    })
  }

  function viewRole() {
    db.query("select * from role", function(err, data){
      printTable(data)
      menu()
    })
  }


menu();

    
