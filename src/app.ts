import { generateChart } from './graphics/chart';
import { getFirstNumericColumn } from './data/numericData';
import { getData } from './data/statsApi';

const url = 'https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression';

export const generateChartFromUrl = async (url: string) => {
  const data = await getData(url);
  const numericColumn = getFirstNumericColumn(data[0]);
  await generateChart(numericColumn);
};

generateChartFromUrl(url);

