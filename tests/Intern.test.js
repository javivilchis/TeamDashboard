const { it, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

describe("Intern class", () => {
     describe("Intern instantiation", () => {

          it("should create a new Intern class", () => {
               const obj = new Intern("Javier", 0, "test@test.com","SMU");
               expect(obj instanceof Intern).toEqual(true);
          });

          it("should return Intern as a role", () => {
               const obj = new Intern("Javier", 0, "test@test.com","SMU");
               expect(obj.getRole()).toEqual("Intern");
          });

          it("should return SMU as school", () => {
               const obj = new Intern("Javier", 0, "test@test.com","SMU");
               expect(obj.getSchool()).toEqual("SMU");
          });

     });
});
 