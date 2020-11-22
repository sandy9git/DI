const findFirstColumnWithNumericData = (dataArray: object[]): string => {
  const firstRow = dataArray[0];
  const keyWithNumericValue = Object.keys(firstRow).find(
    (key) => !isNaN(parseFloat(firstRow[key]))
  );

  return keyWithNumericValue;
};

const getDataByColumnName = (
  dataArray: object[],
  columnName: string
): string[] => {
  return dataArray.map((dataItem) => dataItem[columnName]);
};

export const getFirstNumericColumn = (dataArray: object[]) => {
  const columnName = findFirstColumnWithNumericData(dataArray);
  if(!columnName){
    return null;
  }
  const columnData = getDataByColumnName(dataArray, columnName);
  const numericData = columnData.map((item) => parseFloat(item));
  return numericData;
};