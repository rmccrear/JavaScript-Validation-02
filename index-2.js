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

// function with an argument
function hasLongName(firstName) {
    let nameLength = firstName.length;
    if(nameLength > 7) {
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
