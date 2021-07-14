const Employee = require('./employee.js');

class Manager extends Employee{
     constructor(name,id,email,officeNumber){
          this.officeNumber = officeNumber;
          super(name,id,email);
          this.role = "Manager";
     }
     getRole(){
          return this.role;
     }
}

module.exports =   Manager;