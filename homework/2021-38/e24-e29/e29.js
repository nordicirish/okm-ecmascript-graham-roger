String.prototype.isPalindrome = function () {
  let reversed = "";
  for (let i = this.length - 1; i >= 0; i--) {
    reversed = reversed + this.charAt(i);
  }

  console.log(reversed == this ? "true" : "false");
};
// object.function notation so value this will be passed into the isPalindrone function
console.log("saippuakauppias".isPalindrome()); // true
console.log("abc".isPalindrome()); // false

//will originally fail because isPalindrome is not a string function
// to work must create a function for the string prototype
