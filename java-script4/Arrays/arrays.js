// Arrays in java
//---> Collection of items


// creat Array

//----->  let heroes = ["ironman", "hulk", "thor", "batman"];


//---->  let marks = [96, 75, 44, 24, 53];

//------------------------------------------------


// EX - 1]

// let marks = [96, 75, 44, 24, 53];
// console.log(marks)
// console.log(marks.length) // property


// let heroes = ["ironman", "hulk", "thor", "batman"];
// console.log(heroes);
// console.log(heroes.length)


//  Ex - 2]

// let marks = [96, 75, 44, 24, 53];


//    output
//console-----> marks
//              [96, 75, 44, 24, 53]

//console----->  marks[0]
//               96

//console----->  marks[1]
//               75

//console----->  marks[3]
//               24

//console----->  marks[4]
//               53

//console-----> marks[4]=23  //value change
//              23

//console-----> marks
// (5) [96, 75, 44, 24, 23]

// --------------------------------------------------


// looping over an array

//print all elements of an array


// for loops

// let heroes = ["ironman", "hulk", "saktiman","thor", "batman"];

// for (let i = 0; i<heroes.length ; i++){
//     console.log(heroes[i])
// }


// for of loops

//Ex

let heroes = ["ironman", "hulk", "saktiman","thor", "batman"];

for(let abc of heroes){
    console.log(abc)
}

//Ex

let cities = [ "delhi", "pune", "mumbai", "nagpur", "hyderabad","gurgaon"]

for(let xyz of cities){
    console.log(xyz)
}

//uppercase method

for(let xyz of cities){
    console.log(xyz.toUpperCase())
}