// We want to make a fortune telling machine
// takes your name as input
// and outputs your fortune

// Name is longer than 7 characters: "will marry late in life"
// Name is shorter than 5 characters: "will marry within a year."
// name is between 5 and 7 characters (inclusive): "will encounter a once-in-a-lifetime opurtunity"
// first letter is 'R': "will be rich"
// Name contains an 'i': "will fall in love this week"



// let firstName1 = input;
// let nameLength = firstName1.length;
// if(nameLength > 7){
//     console.log("You will marry late in life");
// }

// INPUT: String
// OUTPUT: String
function sayHello(firstName) {
    return `Hello ${firstName}, I love ice cream.`;
}

function favChar(x) {
    if(x.length > 7) {
      return `${x} is my favorite video game character.`;
    }
    else {
        return `I hate ${x}`;
    }
}

favChar("Princess Peach");

// INPUT: String
// OUTPUT: Boolean (True/False)
// function with an argument
function hasLongName(firstName) {
    let nameLength = firstName.length;
    if(nameLength > 7) {
        return true;
    } else {
        return false;
    }
}

// We want a function that returns true if the string has an "i"
// otherwise it returns false.
// INPUT: firstName <String>
// OUTPUT: true/false <Boolean>
function hasAnI(firstName) {
    let x = firstName.includes("i");
    if(x) {
        return true;
    } else {
        return false;
    }
}

// Example of how to use hasLongName....
// let n = hasLongName("Robert")
// console.log(n);
// console.log(   hasLongName("Trincell")   );
// console.log(   hasLongName("Julie")      );
// console.log(   hasLongName("Kabrini")    );
 
function tellFortune(nameFirst) {
    let n = hasLongName(nameFirst);
    if(n) {
        console.log(`${nameFirst} You will marry late...`)
    } else {
        console.log(`${nameFirst} You will not marry late...`)
    }
    let m = hasAnI(nameFirst);
    if(m) {
        console.log("You will meet a mysterious stranger before the week is over.");
    }
}

let input1 = "Robert";
let input2 = "Trincell";
let input3 = "Bob";
let input4 = "Julie";
let input5 = "Kabrini";

tellFortune(input1);
tellFortune(input2);
tellFortune(input3);
tellFortune(input4);

tellFortune("Casandra");
tellFortune("Elisabeth");
tellFortune("Sam");
tellFortune("Kate");
