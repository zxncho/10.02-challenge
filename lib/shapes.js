// Base class for shapes
class Shape {
  constructor(Shape) {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}

class Color extends Shape {
  constructor() {
    super()
  }
  }

class Circle extends Shape {
constructor() {
  super();
}
}

class Triangle extends Shape {
  constructor() {
    super();
  }
  }

class Square extends Shape {
  constructor() {
    super();
  }
  }

module.exports = { Color, Circle, Triangle, Square };
