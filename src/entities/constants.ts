export const CANVAS = document.querySelector("canvas") as HTMLCanvasElement;
CANVAS.width = 960;
CANVAS.height = 640;
export const CTX = CANVAS.getContext("2d") as CanvasRenderingContext2D;
