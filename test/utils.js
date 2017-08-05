import chai from "chai";
import utils from "../src/utils";

describe("utils", () => {
  it("#validEmail", () => {
    chai.assert.equal(false, utils.validateEmail("ale"), "1");
    chai.assert.equal(false, utils.validateEmail(""), "2");
    chai.assert.equal(false, utils.validateEmail(null), "3");
    chai.assert.equal(false, utils.validateEmail(undefined), "4");
    chai.assert.equal(false, utils.validateEmail("test@"), "5");
    chai.assert.equal(false, utils.validateEmail("@"), "6");
    chai.assert.equal(true, utils.validateEmail("test@test.com"), "7");
    chai.assert.equal(true, utils.validateEmail("test@test.com.com"), "8");
  });
});
