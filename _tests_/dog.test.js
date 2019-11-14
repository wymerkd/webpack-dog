import { Dog } from '../src/dog.js';

describe('Dog', () => {

  test('should construct a new dog', () => {
    var myDog = new Dog ("rover", "brown", 3);
    expect(myDog.dogName).toEqual("rover");
    expect(myDog.dogColor).toEqual("brown");
    expect(myDog.dogAge).toEqual(3);
  });
});
