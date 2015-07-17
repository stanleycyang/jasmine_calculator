var calculator = require('../calculator');

describe('calculator', function(){

  describe('multiplication', function(){
    it('multiplies 2 and 3', function(){
      var product = calculator.multiply(2,3);
      expect(product).toBe(6);
    });

    it('multiplies 3 and 5', function(){
      var product = calculator.multiply(3,5);
      expect(product).toBe(15);
    });

    it('multiplies 22 by 12392', function(){
      var product = calculator.multiply(22, 12392);
      expect(product).toBe(272624);
    });
  });

  describe('addition', function() {

    it('adds 999 with 22', function() {
      var sum = calculator.add(999, 22);
      expect(sum).toBe(1021);
    });

    it('adds 674 with 987', function() {
      var sum = calculator.add(674, 987);
      expect(sum).toBe(1661);
    });

    it('adds 222 with 9832', function(){
      var sum = calculator.add(222, 9832);
      expect(sum).toBe(10054);
    });

  });

  describe('subtraction', function() {

    it('subtracts 999 by 65', function() {
      var equals = calculator.subtract(999, 65);
      expect(equals).toBe(934);
    });

    it('subtracts 23432 by 321', function() {
      var equals = calculator.subtract(23432, 321);
      expect(equals).toBe(23111);
    });

    it('subtracts 543 by 234', function() {
      var equals = calculator.subtract(543, 234);
      expect(equals).toBe(309);
    });

  });

  describe('division', function() {
    it('divides 932 by 2', function() {
      var equals = calculator.divide(932, 2);
      expect(equals).toBe(466);
    });

    it('divides 653 by 35', function(){
      var equals= calculator.divide(653, 35);
      expect(equals).toBe(19);
    });

    it('divides 27 by 9', function() {
      var equals = calculator.divide(27, 9);
      expect(equals).toBe(3);
    });

  });

});







