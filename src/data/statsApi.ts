import axios from "axios";
import { parse } from "node-html-parser";
import { Tabletojson } from "tabletojson";

export const getData = async (url: string) => {
  const rawPage = await axios.get(url);

  const page = parse(rawPage.data);
  const table = page.querySelector("table");

  if(!table){
    return null;
  }

  return Tabletojson.convert(table.outerHTML);
};
