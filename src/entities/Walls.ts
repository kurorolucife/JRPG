export const walls = {
  objects: [
    {
      height: 47.5,
      id: 31,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 28,
      x: 417.5,
      y: 14,
    },
    {
      height: 47.5,
      id: 32,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 28,
      x: 481.5,
      y: 14.25,
    },
    {
      height: 37.3333333333333,
      id: 33,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 56.6666666666666,
      x: 515,
      y: 4.33333333333333,
    },
    {
      height: 31.6666666666667,
      id: 34,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 87.6666666666666,
      x: 610,
      y: -0.333333333333333,
    },
    {
      height: 31.6666666666667,
      id: 35,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 90.3333333333333,
      x: 226,
      y: 159.333333333333,
    },
    {
      height: 64.75,
      id: 36,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 31.25,
      x: 192.25,
      y: -0.5,
    },
    {
      height: 224,
      id: 37,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 31.5,
      x: 191.75,
      y: 95.5,
    },
    {
      height: 31.75,
      id: 39,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 160,
      x: 224,
      y: 287.75,
    },
    {
      height: 159.5,
      id: 40,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 30.75,
      x: 384.5,
      y: 287.5,
    },
    {
      height: 31.25,
      id: 41,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 126.25,
      x: 416.5,
      y: 287.75,
    },
    {
      height: 29.6666666666667,
      id: 42,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 157,
      x: 577.666666666667,
      y: 288.333333333333,
    },
    {
      height: 285.333333333333,
      id: 43,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 29.3333333333334,
      x: 704.666666666667,
      y: 0.666666666666667,
    },
    {
      height: 27.3333333333333,
      id: 44,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 30.3333333333333,
      x: 352.333333333333,
      y: 3,
    },
    {
      height: 26.6666666666667,
      id: 45,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 124,
      x: 226,
      y: 128,
    },
    {
      height: 122,
      id: 46,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 28.6666666666666,
      x: 354,
      y: 66.6666666666667,
    },
    {
      height: 25.3333333333333,
      id: 47,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 280.666666666667,
      x: 388,
      y: 163.333333333333,
    },
    {
      height: 123.333333333333,
      id: 48,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 32,
      x: 577.333333333333,
      y: 2.66666666666667,
    },
    {
      height: 24.6666666666667,
      id: 49,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 280.666666666667,
      x: 291.333333333333,
      y: 226.666666666667,
    },
    {
      height: 52,
      id: 50,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 22,
      x: 581.333333333333,
      y: 228.666666666667,
    },
    {
      height: 126.5,
      id: 54,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 27,
      x: 642,
      y: 320.5,
    },
    {
      height: 30,
      id: 56,
      name: "",
      rotation: 0,
      type: "",
      visible: true,
      width: 224,
      x: 416,
      y: 416.5,
    },
  ],

  isColliding: function (x: number, y: number, width: number, height: number) {
    // return false;
    const rectangle = { x, y, width, height };
    for (let wall of this.objects) {
      const rect2X = wall.x + 32;
      const xColliding =
        rectangle.x < rect2X + wall.width &&
        rectangle.x + rectangle.width > rect2X;
      const yColliding =
        rectangle.y < wall.y + wall.height &&
        rectangle.y + rectangle.height > wall.y;

      const collisionDetected = xColliding && yColliding;

      if (collisionDetected) {
        return true;
      }
    }
  },
};
