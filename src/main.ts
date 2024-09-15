import { Game } from "./entities/Game";
import { getImg, tileMap } from "./helpers";
import { Character } from "./models/Character";
import { CANVAS, CTX } from "./entities/constants";
import "./style.css";

const canvas_cols = CANVAS.width / 32;
// const canvas_rows = canvas.height / 32;
const spritesheets = {
  people1: getImg("people-1"),
  people2: getImg("people-2"),
  tile: getImg("AH_A5"),
  objects: getImg("AH_B"),
};

const tilemap_cols = spritesheets.tile.width / 32;

const char = new Character({
  name: "John",
  x: 0,
  y: 0,
  size: 32,
  spritesheet: spritesheets.people1,
  sprite_cols: [0, 2],
  sprite_rows: [0, 3],
});

function update() {
  Game.properties.frame++;
  char.update();
}

function render() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  tileMap.forEach((cell, index) => {
    /** Code that shows which tile shoul I draw */
    let tile_row = 1;
    let tile_col = 1;
    if (cell == 0) return;

    if (cell >= tilemap_cols) {
      tile_row = Math.ceil(cell / tilemap_cols);
      // Why it works?? \/
      tile_col = cell % tilemap_cols != 0 ? cell % tilemap_cols : tilemap_cols;
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
      spritesheets.tile,
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

  char.draw();
}

function gameLoop() {
  update();

  render();

  requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener("keydown", ({ key }) => {
  if (key == "ArrowUp") {
    Game.controls.up = true;
  }
  if (key == "ArrowRight") {
    Game.controls.right = true;
  }
  if (key == "ArrowDown") {
    Game.controls.down = true;
  }
  if (key == "ArrowLeft") {
    Game.controls.left = true;
  }
});

window.addEventListener("keyup", ({ key }) => {
  if (key == "ArrowUp") {
    Game.controls.up = false;
  }
  if (key == "ArrowRight") {
    Game.controls.right = false;
  }
  if (key == "ArrowDown") {
    Game.controls.down = false;
  }
  if (key == "ArrowLeft") {
    Game.controls.left = false;
  }
});
