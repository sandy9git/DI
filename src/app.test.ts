const mockGenerateChart = jest.fn();
const mockGetFirstNumericColumn = jest.fn();

jest.mock("./data/statsApi", () => ({
  getData: jest.fn().mockImplementation(() => Promise.resolve([[{ "test": "111" }]])),
}));

jest.mock("./data/numericData", () => ({
  getFirstNumericColumn: mockGetFirstNumericColumn 
}));

jest.mock("./graphics/chart", () => ({
  generateChart: mockGenerateChart,
}));


import { generateChartFromUrl } from './app'


describe("when generating a chart from a url", () => {
  describe("and numeric data is returned", () => {
    it("should generate chart", async () => {
      mockGenerateChart.mockImplementation(() => Promise.resolve());
      mockGetFirstNumericColumn.mockImplementation(() =>([111]));

      await generateChartFromUrl("test");

      expect(mockGetFirstNumericColumn).toHaveBeenCalledWith([{ test: "111" }]);
      expect(mockGenerateChart).toHaveBeenCalledWith([111]);
    });
  });

});
