export function Dog(dogName, dogColor, dogAge) {
  this.dogName = dogName;
  this.dogColor = dogColor;
  this.dogAge = dogAge;
  this.howOld = 0;

  debugger;
}

Dog.prototype.peopleYears = function(dogAge) {

  var howOld = this.dogAge * 7;
  return howOld;
};
