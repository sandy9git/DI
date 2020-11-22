import { getFirstNumericColumn } from "./numericData";
import { numericData, nonNumericData } from "./testData";

describe("when an object array is passed", () => {
  describe("and it contains a column with numeric data", () => {
    it("should return the first column with numeric data", () => {
      const result = getFirstNumericColumn(numericData[0]);
      
      expect(result).not.toBeNull();
    });
  });

  describe("and it doesn't contains a column with numeric data", () => {
    it("should return null", () => {
      const result = getFirstNumericColumn(nonNumericData[0]);

      expect(result).toBeNull();
    });
  });
});
