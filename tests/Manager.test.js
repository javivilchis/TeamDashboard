const { it, expect } = require("@jest/globals");
const Manager = require("../lib/manager");

describe("Manager class", () => {
     describe("Manager instantiation", () => {

          it("should create a new Manager class", () => {
               const obj = new Manager("Javier", 0, "test@test.com","1231231234");
               expect(obj instanceof Manager).toEqual(true);
          });

          it("should return Manager as a role", () => {
               const obj = new Manager("javier", 0, "test@test.com","1231231234");
               expect(obj.getRole()).toEqual("Manager");
          });
     });
});
 