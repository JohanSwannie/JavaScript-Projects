  class Rectangle {
    constructor(_width, _height, _color) {
      this.width = _width;
      this.height = _height;
      this.color = _color;
    }
    getRectangleArea() {
      return `The area of the ${this.color} rectangle is ${this.width * this.height}`;
    }

    set anotherObject(value) {
      this.width = value;
      this.height = value;
      this.color = 'orange';
    }

    get theAreas() {
      return `The area of the ${this.color} rectangle is now ${this.width * this.height}`;
    }
  }

  const rect1 = new Rectangle(5, 3, 'skyblue');
  const rect2 = new Rectangle(9, 4, 'darkgreen');
  document.write(`${rect1.getRectangleArea()} </br>`);
  document.write(`${rect2.getRectangleArea()} </br>`);
  rect1.anotherObject = 30;
  document.write(`${rect1.theAreas}`);
