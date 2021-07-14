const Employee = require('./employee.js');

class Engineer extends Employee{
     constructor(name, id, email, github){
          super(name,id,email);
          this.github = github;
          this.role = 'Engineer'; //already exist in employee class.
     }
     getGithub (){
          return this.github;
     }
}

module.exports = Engineer;