import * as MapData from "../assets/maps/test_map.json";
import { getImg } from "./helpers";

export async function getMap() {
  const clone = JSON.parse(JSON.stringify(MapData));
  clone.tilesets = MapData.tilesets.map((layer) => {
    return {
      ...layer,
      source: getImg(layer.source),
    };
  });
}
