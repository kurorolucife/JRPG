import { CTX, CANVAS } from "../entities/constants";
type TilemapConstructorProperties = {
  coordinates: number[];
  spritesheet: HTMLImageElement;
  firstGid: number;
};
class Tilemap {
  private coordinates;
  private spritesheet;
  private firstGid;
  private cols;
  constructor({
    coordinates,
    spritesheet,
    firstGid,
  }: TilemapConstructorProperties) {
    this.coordinates = coordinates;
    this.spritesheet = spritesheet;
    this.firstGid = firstGid;
    this.cols = Math.ceil(spritesheet.width / 32);
  }

  draw() {
    const canvas_cols = CANVAS.width / 32;
    this.coordinates.forEach((cell, index) => {
      const parsedCell = this.firstGid > 1 ? cell - (this.firstGid - 1) : cell;
      /** Code that shows which tile shoul I draw */
      let tile_row = 1;
      let tile_col = 1;
      if (parsedCell == 0) return;

      if (parsedCell >= this.cols) {
        tile_row = Math.ceil(parsedCell / this.cols);
        // Why it works?? \/
        tile_col =
          parsedCell % this.cols != 0 ? parsedCell % this.cols : this.cols;
        //
      }
      // To array indexes
      tile_row--;
      tile_col--;

      /** ----------------------------------- */

      // Code that shows where should i draw the tile
      const easy_idx = index + 1;
      let which_col = easy_idx % canvas_cols;
      let which_row = Math.ceil(easy_idx / canvas_cols);

      // which_col--;
      which_row--;

      CTX.drawImage(
        this.spritesheet,
        32 * tile_col,
        32 * tile_row,
        32,
        32,
        32 * which_col,
        32 * which_row,
        32,
        32
      );
    });
  }
}
export { Tilemap };
