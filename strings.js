// Instructions
// Copy the code below into the JavaScript file
// In your HTML, create an text input and a button.

// The text input should only accept letters. No numbers.

// Implement the logic in the reversal function that reverses the order
// of the characters in the string, and outputs the result in the DOM,
// below the text input.

// Implement the logic in the alphabits function that return the characters
// in alphabetical order, and outputs the result in the DOM, below the text
// input.

// Implement the logic in the palindrome function that determine whether
// the string is a palindrome. If it is, display the text "Your string is
// a palidrome" in the DOM, below the text input.

// When the user presses the enter key in the text input, or clicks the button,
// set the value of the testString variable (see below) to the value of the input.

// The output of each of the functions should immediately appear as well.
var testString = "";
var clickButton = document.getElementById("button");
clickButton.addEventListener("click", getInput);

var input = document.getElementById("input-text");
document.addEventListener("keyup", function(event) {
	if (event.which === 13) {
			getInput();
	}
});

function getInput() {
	testString = document.getElementById("input-text").value;
	// vv allows only letters, no numbers or special chars.
	if (/^[a-zA-Z]+$/.test(testString)) {
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
	} else {
		alert("No numbers allowed.");
	}
}

function reversal(st) {
	var reverseText = document.getElementById("sol1");
	reverseText.innerHTML = st.split("").reverse().join("");
}

function alphabits(st) {
	var alphaText = document.getElementById("sol2");
	alphaText.innerHTML = st.split("").sort().join("");
}

function palindrome(st) {
	var palinText = document.getElementById("sol3");
	if (st.split("").reverse().join("") === st) {
		palinText.innerHTML = (st + " is a palindrome!");
	} else {
 		palinText.innerHTML = (st + " is not a palindrome.");
	}
}
