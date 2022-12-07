  class Box {
    constructor(_width) {
      this.width = _width;
      this.height = _width;
    }

    static test1(width, height) {
      return `Is the box a square - ${width === height}`;
    }

    static test2(width, height) {
      return `Is the square area greater than 200 - ${width * height > 200}`;
    }
  }

  let box1 = new Box(12);
  for (var value in box1) {
    if (box1.hasOwnProperty(value)) {
      document.write(`${value} : ${box1[value]} </br>`);
    }
  }

  document.write(`${Box.test1(14, 14)} </br>`);
  document.write(`${Box.test2(13, 13)}`);
