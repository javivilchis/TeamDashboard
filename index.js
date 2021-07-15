const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'checkbox',
      message: 'What are is your role?',
      name: 'role',
      choices: ['Employee', 'Engineer', 'Intern', 'Manager']
    },
    {
      type: 'input',
      message: 'what is your email?',
      name: 'email'
    },
    {
     type: 'input',
     message: 'what is your github user?',
     name: 'github'
     }
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
     
    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
