var word = prompt("Please Type in a Word");
var length = word.length;
var thirdCharacter = word.charAt(2);
var lowercaseWord = word.toLowerCase();
var uppercaseWord = word.toUpperCase();
var subWord = word.slice(1, 5)


if (word) {
  alert("You Entered:" + " " + word + "\n" + 
  	"There are" + " " + length + " " + "characters in" + " " + word + "\n" +
  	"The third character is" + " " + thirdCharacter + "\n" +
  	"Lowercase:" + " " + lowercaseWord + "\n" +
  	"Uppercase:" + " " + uppercaseWord + "\n" +
  	"Example: I have always wanted a" + " " + word + " " + "since I was a little boy." + "\n" +
  	"Subword:" + " " + subWord );
}
else {
	console.log("Please enter a word.")
}

