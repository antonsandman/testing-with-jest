const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

// Nytt testfall
test('peek on stack with three elements, pops two, returns the last existing element', () => {
    stack.push(2);
    stack.push("second item");
    stack.push(1.23);
    stack.pop();
    stack.pop();
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(2);
});