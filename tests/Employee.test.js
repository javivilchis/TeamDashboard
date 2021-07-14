const { it, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Employee class", () => {
     describe("Employee instantiation", () => {

          it("should create a new employee class", () => {
               const obj = new Employee("javier", 0, "test@test.com");
               expect(obj instanceof Employee).toEqual(true);
          });

          it("should return Employee as a role", () => {
               const obj = new Employee("javier", 0, "test@test.com");
               expect(obj.getRole()).toEqual("Employee");
          });

          it("should return Employee as a role", () => {
               const obj = new Employee("javier", 0, "test@test.com");
               expect(obj.getId()).toEqual(0);
          });

          it("should return Employee as a role", () => {
               const obj = new Employee("javier", 0, "test@test.com");
               expect(obj.getEmail()).toEqual("test@test.com");
          });

          it("should return Employee as a role", () => {
               const obj = new Employee("javier", 0, "test@test.com");
               expect(obj.getName()).toEqual("Javier");
          });
     });
});
 