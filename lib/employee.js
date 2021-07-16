class Employee {
     constructor(name,id,email){
          this.name = name;
          this.id = id;
          this.email = email;
          this.role = "Employee";
     }
     getName(){
          //return the name;
          return this.name;
     }
     getId(){
          //todo: return the id
          return this.id;
     }
     getEmail(){
          //todo: add the email treatment
          return this.email;
     }
     getRole(){
          return this.role;
     }
}

module.exports = Employee;