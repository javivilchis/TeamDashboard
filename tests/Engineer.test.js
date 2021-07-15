const { it, expect } = require("@jest/globals");
const Employee = require("../lib/employee");

describe("Engineer class", () => {
     describe("Engineer instantiation", () => {

          it("should create a new Engineer class", () => {
               const obj = new Engineer("javier", 0, "test@test.com", "javivilchis");
               expect(obj instanceof Engineer).toEqual(true);
          });

          it("should return Engineer as a role", () => {
               const obj = new Engineer("javier", 0, "test@test.com");
               expect(obj.getRole()).toEqual("Engineer");
          });

          it("should return username as a github", () => {
               const obj = new Engineer("javier", 0, "test@test.com", "javivilchis");
               expect(obj.getGithub()).toEqual("javivilchis");
          });
     });
});
 