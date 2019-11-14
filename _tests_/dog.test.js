import { Dog } from '../src/dog.js';

describe('Dog', () => {

  test('should construct a new dog', () => {
    var myDog = new Dog ("rover", "brown", 3);
    expect(myDog.dogName).toEqual("rover");
    expect(myDog.dogColor).toEqual("brown");
    expect(myDog.dogAge).toEqual(3);
  });

  test('should convert dog years to people years', () => {
    var testDog = new Dog (0,0,3);
    expect(testDog.peopleYears(3)).toEqual(21);
  });
});
