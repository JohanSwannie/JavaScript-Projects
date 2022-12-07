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
      document.write(`<span style='font-family: "Trirong", serif; color:
      #FFF'>${value} : ${box1[value]} </span> </br>`);
    }
  }

  document.write(`<span style='font-family: "Trirong", serif; color:
  #FFF'>${Box.test1(14, 14)} </span>  </br>`);
  document.write(`<span style='font-family: "Trirong", serif; color:
  #FFF'>${Box.test2(13, 13)} </span>`);
