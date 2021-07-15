const { it, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Intern class", () => {
     describe("Intern instantiation", () => {

          it("should create a new Intern class", () => {
               const obj = new Intern("javier", 0, "test@test.com","SMU");
               expect(obj instanceof Intern).toEqual(true);
          });

          it("should return Intern as a role", () => {
               const obj = new Intern("javier", 0, "test@test.com","SMU");
               expect(obj.getRole()).toEqual("Intern");
          });

          it("should return SMU as school", () => {
               const obj = new Intern("javier", 0, "test@test.com","SMU");
               expect(obj.getSchool()).toEqual("SMU");
          });

     });
});
 