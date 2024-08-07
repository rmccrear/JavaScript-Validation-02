
// We want to make a fortune telling machine
// takes your name as input
// and outputs your fortune

// Name is longer than 7 characters: "will marry late in life"
// Name is shorter than 5 characters: "will marry within a year."
// name is between 5 and 7 characters (inclusive): "will encounter a once-in-a-lifetime opurtunity"
// first letter is 'R': "will be rich"
// Name contains an 'i': "will fall in love this week"

let myName;
myName = "Trincell";
// get the length of the name
let lengthOfName = myName.length;
// if the name is shorter than 5 give marry early fortune
if (lengthOfName < 5) {
    console.log("You will marry soon!");
}

let firstCharacter = myName[0];
console.log("first letter is " + firstCharacter);
if(firstCharacter === "T") {
    console.log("You will be rich!")
}
