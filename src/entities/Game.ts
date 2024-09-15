const controls = {
  up: false,
  right: false,
  down: false,
  left: false,
};

const properties = {
  frame: 0,
  staggerFrames: 12,
};

const debug = {
  collision:
    new URLSearchParams(window.location.search).get("debug") == "1" ?? false,
};

export const Game = {
  controls,
  properties,
  debug,
};
