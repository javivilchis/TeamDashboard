const { it, expect } = require("@jest/globals");
const Engineer = require("../lib/engineer");

describe("Engineer class", () => {
     describe("Engineer instantiation", () => {

          it("should create a new Engineer class", () => {
               const obj = new Engineer("Javier", 0, "test@test.com", "javivilchis");
               expect(obj instanceof Engineer).toEqual(true);
          });

          it("should return Engineer as a role", () => {
               const obj = new Engineer("Javier", 0, "test@test.com");
               expect(obj.getRole()).toEqual("Engineer");
          });

          it("should return username as a github", () => {
               const obj = new Engineer("Javier", 0, "test@test.com", "javivilchis");
               expect(obj.getGithub()).toEqual("javivilchis");
          });
     });
});
 