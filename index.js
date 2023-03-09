function isPalindrome(word) {
  // Write your algorithm here
  //expect take each letter of the word provided and create a new word with those letters in the reverse order.
  //compare that new word with the old word. If they are the same, then the answer is true, and the word is a Palindrome.

  let wordBackwards = ""
  for (i=word.length-1;i>=0;i--){
  let letter = word.charAt(i)
  wordBackwards += letter
  }
return wordBackwards===word
}

/* 
  Add your pseudocode here
  create a new word called wordBackwards and set it to a blank string

  usering a for loop, take whatever word is given and iterate in reverse. 
    take each letter provided and add it to the empty string of "wordBackwards"

  compare "wordBackwards" to "word". return result!
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;


