const Employee = require('./employee.js');

class Intern extends Employee{
     constructor(name,id,email,school){
          this.school = school;
          super(name,id,email);
          this.role = "Intern";
     }
     getSchool() {
          return this.school;
     }
     getRole(){
          return this.role;
     }
}

module.exports =   Intern;