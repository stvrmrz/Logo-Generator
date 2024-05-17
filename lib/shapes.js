class Shape {
}

class Circle extends Shape {
    render() {
    return `<circle cx="150" cy="100" r="80" />`;
    }
}

class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" />`;
    }
}

class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" />`;
    }
  }


module.exports = { Circle, Triangle, Square };