const inquirer = require('inquirer');
const db = mysql.createConnection(
    {
      host: "127.0.0.1",
      user: 'root',
      password: 'Nicholas11',
      database: 'emp_db',
    },
    console.log(`Connected to the Employee database.`)
  );



function menu() {
  inquirer.prompt([
    {
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
    }
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
        }//else (response.option === "update an employee role"){

        //}
    })
])}

menu();

    
//     {
//       type: 'input',
//       message: 'What is your user name?',
//       name: 'username',
//     },
//     {
//       type: 'password',
//       message: 'What is your password?',
//       name: 'password',
//     },
//     {
//       type: 'password',
//       message: 'Re-enter password to confirm:',
//       name: 'confirm',
//     },
//   ])
//   .then((response) =>
//     response.confirm === response.password
//       ? console.log('Success!')
//       : console.log('You forgot your password already?!')
//   );

// }
