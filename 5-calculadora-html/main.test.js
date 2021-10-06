const operation = require("./main.js");

describe("Given the function operation", () => {
  describe("When it recieves a '9' and an '8' and the operator is '-'", () => {
    test("Then it should return '1", () => {
      const data1 = "9";
      const data2 = "8";
      const operator = "-";
      const expected = "1";

      const result = operation(data1, data2);

      expect(result).toBe(expected);
    });
  });
});
