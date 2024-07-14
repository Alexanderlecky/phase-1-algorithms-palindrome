function isPalindrome(word) {
  // Write your algorithm here
  const reversedStr = word.split("").reverse().join("");

  return word === reversedStr;

}

/* 
  Add your pseudocode here
  1. create a function `isPalindrome` that accepts a string as an argument .
  2. Reverse the string.
  3. compare the originL string with the reversed string .
  4. if they are the same , return `true`; otherwise, return `false`.
*/

/*
  Add written explanation of your solution here
  The function `isPalindrome` takes a string as input. It reverses the string by splitting it into an array of characters, reversing the array, and then joining it back into a string. It then compares the reversed string with the original string. If they are identical, the function returns `true`, indicating that the input string is a palindrome. If they are not identical, it returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  // Additional test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("level"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}


module.exports = isPalindrome;
