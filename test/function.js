import {assert} from "chai";
describe("test array api", function () {
  describe("function properties", function () {
    it("name", function () {
      function myTestFunc() {}
      assert.equal(myTestFunc.name, "myTestFunc");
      const object = {
        anotherFunc: function myAnotherFunc() {}
      };
      assert.equal(object.anotherFunc.name, "myAnotherFunc");
    });
  });
});

