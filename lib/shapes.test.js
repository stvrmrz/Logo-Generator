const { Circle } = require('./shapes');

test('Circle renders correctly', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });