import {assert} from "chai";
describe("test array api", function () {
  it("some", function () {
    assert.isTrue([1, 2, 3].some(i => i > 2));
    assert.isFalse([1, 2, 3].some(i => i > 3));
    assert.isFalse([1, 2, 3].some(i => i < 0));
    assert.isTrue([1, 2, 3].some(i => i === 2));
  });
  it("every", function () {
    assert.isFalse([1, 2, 3].every(i => i > 2));
    assert.isTrue([1, 2, 3].every(i => i < 4));
    assert.isTrue([1, 2, 3].every(i => i > 0));
  });
});
