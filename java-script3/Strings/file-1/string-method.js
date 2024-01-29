//string methods in js

//means string functions

//There are built in functions to manipulate a string.

// 1] str.toUpperCase()

//Ex-1--> 

//                  let str ="ApnaNagpur";

// console---->     str.toUpperCase()
// Ans--->         'APNANAGPUR'

//Ex-2-->

                let str = "ApnaNagpur";
                let newStr = str.toUpperCase();

                console.log(newStr)

//output--->    APNANAGPUR





//  2] str.toLowerCase()

//Ex-1--> 

//                  let abc ="ApnaNagPur";

// console---->     abc.toLowerCase()
// Ans--->         'apnanagpur'

//Ex-2-->

                let abc = "ApnaNagPur";
                let newabc = abc.toLowerCase();

                console.log(newabc)

//output--->    apnanagpur





//  3] str.trim()----> Remove spaces 1st and last

// Ex-->

let red = "       Apna     Nagpur       ";
console.log(red.trim());

//Output----> Apna     Nagpur


//   4] str.slice(start, End?)

// Ex-->  

let Name = "Gaurav Gupta"
console.log(Name.slice(3, 11));

//Output-->  rav Gupt




//  5] str1.concat(str2)

//Ex---> 

let FirstName = "Gaurav";
let LastName = "Gupta";

let res = FirstName.concat(LastName);

console.log(res)

//Output--->  GauravGupta


let exa = LastName.concat(FirstName);

console.log(exa)

//Output--->  GuptaGaurav


let ex = FirstName + LastName;

console.log(ex)

//Output--->  GauravGupta

let js = "My Name is a " + FirstName + " "+ LastName;

console.log(js)



//  6] str.replace(searchVal, newVal)

let xyz = "Hello";

console.log(xyz.replace("H","Y"));

//Output---->  Yello

console.log(xyz.replace("lo","p"));

//Output---->  Help

let jkl = "Hellolololo";
console.log(jkl.replaceAll("lo","p"));

//Output---->  Helpppp


//  7]  str.chaAt(idx)

let jdg = "Anything";

console.log(jdg.charAt(4));

//Output--->  h
