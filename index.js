
// We want to make a fortune telling machine
// takes your name as input
// and outputs your fortune

// Name is longer than 7 characters: "will marry late in life"
// Name is shorter than 5 characters: "will marry within a year."
// name is between 5 and 7 characters (inclusive): "will encounter a once-in-a-lifetime opurtunity"
// first letter is 'R': "will be rich"
// Name contains an 'i': "will fall in love this week"

let myName;
myName = "Julie";
// get the length of the name
let lengthOfName = myName.length;
// if the name is shorter than 5 give marry early fortune
if (lengthOfName < 5) {
    console.log("You will marry soon!");
}

let firstCharacter = myName[0];
console.log("first letter is " + firstCharacter);
if(firstCharacter === "R") {
    console.log("You will be rich!")
}

// We want to know if the name has an i
//    if so, they will fall in love immediately.
// You could store the value of the functions with a variable
let fallInLoveNow = myName.includes("i");
if(fallInLoveNow) {
    console.log("You will meet a mysterious stranger in a cafe before the weekend.");
}
// You could call it directly
if(myName.includes("i")) {
    console.log("You will meet a mysterious stranger in a cafe before the weekend.");
}
