import * as ChartJS from "chart.js";
import { CanvasRenderService } from "chartjs-node-canvas";
import { writeFile } from "fs";

export const generateChart = async (data: number[]) => {
  const width = 400;
  const height = 400;

  const canvasRenderService = new CanvasRenderService(
    width,
    height,
    (ChartJS) => {}
  );

  const barChartConfig = {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          data: data.slice(0, 6),
        },
      ],
    },
  };

  const image = await canvasRenderService.renderToBuffer(barChartConfig);
  writeFile("chart.png", image, (err) => {
    if (err) {
      throw err;
    }
    console.log("The image has been saved!");
  });
};