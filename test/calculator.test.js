import { expect } from 'chai';  // Correct import for Chai
import add from '../calculator.js';  // Import the function to test

describe('Calculator Tests', function() {
  it('should return the sum of two numbers', function() {
    const result = add(2, 3);
    expect(result).to.equal(5);
  });

  it('should return a negative number when adding two negative numbers', function() {
    const result = add(-2, -3);
    expect(result).to.equal(-5);
  });

  it('should return 0 when adding 0 and 0', function() {
    const result = add(0, 0);
    expect(result).to.equal(0);
  });
});
