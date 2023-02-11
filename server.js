const inquirer = require('inquirer');

function menu() {
  inquirer.prompt([
    {
    type: 'list',
    message: 'Select an option',
    name: 'options',
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
