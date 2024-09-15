import { Game } from "../entities/Game";
import { CTX } from "../entities/constants";
type CharacterConstructorProperties = {
  name: string;
  x: number;
  y: number;
  size: number;
  spritesheet: HTMLImageElement;
  sprite_rows: [number, number];
  sprite_cols: [number, number];
};

type CharacterDirection = "left" | "right" | "up" | "down";

class Character {
  public name;
  public x;
  public y;
  public size;
  public spritesheet;
  public sprite_rows;
  public sprite_cols;
  public frameX;
  public frameY;
  private direction: CharacterDirection;
  private firstXFrame;
  private standingFrame;
  private lastXFrame;
  constructor({
    name,
    x,
    y,
    size,
    spritesheet,
    sprite_rows,
    sprite_cols,
  }: CharacterConstructorProperties) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.size = size;
    this.spritesheet = spritesheet;
    this.sprite_rows = sprite_rows;
    this.sprite_cols = sprite_cols;
    this.direction = "down";
    this.frameX = this.sprite_cols[0];
    this.frameY = this.sprite_rows[0];

    this.firstXFrame = this.sprite_cols[0];
    this.lastXFrame = this.sprite_cols[1];

    this.standingFrame = this.sprite_cols[0] + 1;
  }

  update() {
    this.handleControls();
    this.handleAnimation();
  }

  setDirection(direction: CharacterDirection) {
    this.direction = direction;
    if (this.direction == "down") {
      this.frameY = this.sprite_rows[0];
    }
    if (this.direction == "up") {
      this.frameY = this.sprite_rows[1];
    }
    if (this.direction == "left") {
      this.frameY = this.sprite_rows[0] + 1;
    }
    if (this.direction == "right") {
      this.frameY = this.sprite_rows[1] - 1;
    }
  }

  handleControls() {
    if (Game.controls.up) {
      this.setDirection("up");
      this.y -= 1.5;
    }
    if (Game.controls.right) {
      this.setDirection("right");
      this.x += 1.5;
    }
    if (Game.controls.down) {
      this.setDirection("down");
      this.y += 1.5;
    }
    if (Game.controls.left) {
      this.setDirection("left");
      this.x -= 1.5;
    }
  }

  handleAnimation() {
    const shouldAnimate =
      Game.properties.frame % Game.properties.staggerFrames == 0;
    if (shouldAnimate && this.isMoving()) {
      const newFrameX = this.frameX + 1;

      if (newFrameX > this.lastXFrame) {
        this.frameX = this.firstXFrame;
      } else {
        this.frameX = newFrameX;
      }
    }
    if (!this.isMoving()) {
      this.frameX = this.standingFrame;
    }
  }

  isMoving() {
    return (
      Game.controls.up == true ||
      Game.controls.right == true ||
      Game.controls.down == true ||
      Game.controls.left == true
    );
  }

  draw() {
    CTX.drawImage(
      this.spritesheet,
      this.size * this.frameX,
      this.size * this.frameY,
      this.size,
      this.size,
      this.x,
      this.y,
      this.size,
      this.size
    );
  }
}

export { Character };
export type { CharacterDirection };
