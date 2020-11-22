import axios from "axios";
import { getData } from "./statsApi";

jest.mock('axios');
const mockAxiosGet = jest.fn();
axios.get = mockAxiosGet;

describe("when getting data from a url", () => {
  describe("and it returns page with table", () => {
    mockAxiosGet.mockResolvedValueOnce({ data: '<body><table><tr><td>111</td></tr></table></body>'});

    it("should return the data in json format", async () => {
      const result = await getData('test');
      const expectedResult = [[{ "0": "111" }]];

      expect(result).toEqual(expectedResult);
    });
  });

  describe("and it doesn't returns page with table", () => {
    mockAxiosGet.mockResolvedValueOnce({
      data: "<body><div>abc</div></body>",
    });

    it("should return null", async () => {
      const result = await getData("test");

      expect(result).toBeNull();
    });
  });
});
