import {assert} from "chai";
describe("test object api", function () {
  describe("constructor", function () {
    it("Base Type is also the constructor", function () {
      assert.equal(Object, Object.prototype.constructor);
      assert.equal(String, String.prototype.constructor);
    });
    it("Object constructor is instance of Function", function () {
      assert.instanceOf(Object, Function);
      assert.typeOf(Object.bind, 'function');
    });
  });
  describe("prototype", function () {
    it("getPrototypeOf", function () {
      assert.equal(Object.getPrototypeOf({}), Object.prototype);
      assert.equal(Object.getPrototypeOf( () => {}), Function.prototype);
    });
  });
  describe("defineProperty", function () {
    it("defalut", function () {
      const object = {};
      Object.defineProperty(object, 'key', {
        value: 2
      });
      assert.equal(object.key, 2);
      const describer = Object.getOwnPropertyDescriptor(object, 'key');
      assert.equal(describer.value, 2);
      // defalut is false
      assert.isFalse(describer.configurable);
      assert.isFalse(describer.enumerable);
      assert.isFalse(describer.writable);
    });
    it("writable", function () {
      const object = {};
      Object.defineProperty(object, 'key', {
        writable: true,
        value: 2
      });
      assert.equal(object.key, 2);
      const describer = Object.getOwnPropertyDescriptor(object, 'key');
      assert.isTrue(describer.writable);
      object.key = 3;
      assert.equal(object.key, 3);
    });
    it("enumerable", function () {
      const o = {};
      Object.defineProperty(o, 'a', { value: 1, enumerable: true });
      Object.defineProperty(o, 'b', { value: 2, enumerable: false });
      Object.defineProperty(o, 'c', { value: 3 }); // enumerable defaults to false
      o.d = 4; // enumerable defaults to true when creating a property by setting it
      assert.deepEqual(Object.keys(o), ['a', 'd']);
    });
    it("configurable", function () {
      const o = {};
      Object.defineProperty(o, 'a', {
        get: function() { return 1; },
        configurable: false
      });
      assert.throw(function () {
        Object.defineProperty(o, 'a', {
          get: function() { return 1; }
        });
      }, TypeError);
      assert.throw(function () {
        Object.defineProperty(o, 'a', {
          value: 2
        });
      }, TypeError);
      assert.equal(o.a, 1);
    });
    it("get", function () {
      const o = { x: 2 };
      Object.defineProperty(o, 'a', {
        get: function () {
          return "my truth value is " + o.x;
        }
      });
      assert.equal("my truth value is 2", o.a);
    });
    it("set", function () {
      const o = { x: 2 };
      Object.defineProperty(o, 'a', {
        get: function () {
          return o.x;
        },
        set: function (n) {
          o.x = n;
        }
      });
      o.a = 5;
      assert.equal(5, o.a);
    });
  });
});
