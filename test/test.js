const chai = require("chai");
const assert = chai.assert;
const groupArrayElements = require("../index");

describe("groupArrayElements", () => {
  it("Array divided into n parts", () => {
    assert.deepEqual(
      groupArrayElements([1, 2, 3, 4, 5], 3),
      [[1, 2], [3, 4], [5]],
      "Wrong result for [1,2,3,4,5]"
    );
    assert.deepEqual(
      groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8], 4),
      [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8],
      ],
      "Wrong result for [1,2,3,4,5,6,7,8]"
    );
    assert.deepEqual(
      groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 4),
      [
        [1, 2],
        [3, 4],
        [5, 6],
        [7, 8, 9],
      ],
      "Wrong result for [1,2,3,4,5,6,7,8,9]"
    );
    assert.deepEqual(
      groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 13),
      [[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]],
      "Wrong result for [1,2,3,4,5,6,7,8,9,10]"
    );
    assert.deepEqual(groupArrayElements([1], 1), [[1]], "Wrong result for [1]");
    assert.deepEqual(groupArrayElements([], 1), [], "Wrong result for []");

    assert.deepEqual(
      groupArrayElements(["Jerry", "George", "Elaine", "Kramer"], 2),
      [
        ["Jerry", "George"],
        ["Elaine", "Kramer"],
      ],
      "Wrong result for ['Jerry', 'George', 'Elaine', 'Kramer']"
    );
  });
  it("Array is correct length", () => {
    assert.lengthOf(groupArrayElements([1, 2, 3, 4, 5, 6], 4), 4, "Wrong result for [1,2,3,4,5,6]");
    assert.lengthOf(groupArrayElements([], 3), [], "Wrong result for []");
    assert.lengthOf(groupArrayElements([1, 2, 3, 4, 5, 6, 7, 8, 9], 4), 4, "Wrong result for [1,2,3,4,5,6,7,8,9]");
  });
});
