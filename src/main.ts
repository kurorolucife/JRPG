import { Game } from "./entities/Game";
import { getImg, tileMap, tileObjects } from "./helpers";

import { Tilemap } from "./models/Tilemap";
import { Character } from "./models/Character";
import { CANVAS, CTX } from "./entities/constants";
import "./style.css";
import { walls } from "./entities/Walls";

const spritesheets = {
  people1: getImg("people-1"),
  people2: getImg("people-2"),
  tile: getImg("AH_A5"),
  objects: getImg("AH_B"),
};

const char = new Character({
  name: "John",
  x: 0,
  y: 0,
  size: 32,
  spritesheet: spritesheets.people1,
  sprite_cols: [0, 2],
  sprite_rows: [0, 3],
});

const babckgroundMap = new Tilemap({
  coordinates: tileMap,
  spritesheet: spritesheets.tile,
  firstGid: 1,
});

const objectsMap = new Tilemap({
  coordinates: tileObjects,
  spritesheet: spritesheets.objects,
  firstGid: 129,
});

function update() {
  Game.properties.frame++;
  char.update();
}

function render() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  babckgroundMap.draw();

  objectsMap.draw();

  if (Game.debug.collision) {
    walls.objects.forEach((wall) => {
      // WHY + 32???
      CTX.fillStyle = "rgba(255,0,0,0.4)";
      CTX.fillRect(wall.x + 32, wall.y, wall.width, wall.height);
      CTX.fillStyle = "rgba(0,0,0,0.8)";
      CTX.font = "bold 20px sans-serif";

      // CTX.fillText(`x:${wall.x + 32}, y: ${wall.y}`, wall.x + 32, wall.y + 10);
    });
  }

  char.draw();
}

function gameLoop() {
  update();

  render();

  requestAnimationFrame(gameLoop);
}

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

// Start
window.onload = () => {
  gameLoop();
};
