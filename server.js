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

// the menu function //

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
            addDepartment();
        }else if(response.option === "add a role"){
           addRole();
        }else if(response.option === "add an employee"){
           addEmployee();
        }
    })
}


    // the start of all of the view functions that allow you to view the data in table format //

          // the code for viewing the department list in a table //

function viewDepartment() {  
    db.query("select * from department", function(err, data){
      printTable(data)
      menu()
    });
}

          // the code for viewing the employee list  //

function viewEmployee() {
    db.query("select * from employee", function(err, data){
      printTable(data)
      menu()
    });
  }

          // the code for viewwing all the roles //

  function viewRole() {
    db.query("select * from role", function(err, data){
      printTable(data)
      menu()
    });
  }


      // the start of all of the add functions that allow the user to add new data //


      // the code for adding a department //
  function addDepartment() {
    inquirer.prompt([{
      type: 'input',
      name: 'department',
      message: 'Insert the name of the new department!'
    }]).then(function(response){
      db.query("INSERT INTO department (name) VALUES(?)",[response.department],function(err){
        viewDepartment()
          })
    });
  }

          // the code for adding a role //

  function addRole() {
    db.query("select name, id as value from department", function(err,data){
  
    inquirer.prompt([{
      type: 'input',
      name: 'role',
      message: 'Please insert the new role!'
    },{
      type: 'input',
      name: 'salary',
      message: 'What is the salary for this role?'
    },{
      type: 'list',
      name: 'department',
      choices: data,
      message: "what department does this role fall under?"
    }]).then(function(response){
      db.query("INSERT INTO role (title,salary,department_id) VALUES(?,?,?)",[response.role,response.salary,response.department],function(err){
        viewRole()
      })
    })
  });
  }

          // the code for adding an employee //

  function addEmployee() {
    db.query("select title as name,id as value from role", function(err, data){
    db.query("select concat(first_name,' ',last_name) as name, id as value from employee", function(err,employeeData){
  
      inquirer.prompt([{
        type: 'input',
        name: 'first_name',
        message: 'enter the employees first name'
      },{
        type: 'input',
        name: 'last_name',
        message: 'enter the employees last name'
      },{
        type: 'list',
        name: 'role',
        choices: data,
        message: "what is the role of this employee?"
      },{
        type: 'list',
        name: 'employee',
        choices: employeeData,
        message: "who manages this employee?"
      }]).then(function(response){
        db.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES(?,?,?,?)",[response.first_name,response.last_name,response.role,response.employee], function (err){
          viewEmployee()
        })
      })
     }) 
    
    });
  }
  
  
  
menu();

    
