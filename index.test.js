/* eslint-env jest */

const getDestructor = require('./index');

describe('get-destructor', () => {
  it('should call getter with all args', () => {
    const double = jest.fn();
    const getter = getDestructor(double);
    getter(1, 2, 3);
    expect(double).toHaveBeenCalledWith(1, 2, 3);
  });

  it('should destruct with getter', () => {
    const double = jest.fn();
    double.mockReturnValueOnce(1);
    double.mockReturnValueOnce(2);
    double.mockReturnValueOnce(3);
    const getter = getDestructor(double);
    const { one, two, three } = getter();
    expect(one).toBe(1);
    expect(two).toBe(2);
    expect(three).toBe(3);
  });
});
