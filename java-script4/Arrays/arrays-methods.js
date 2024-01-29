// Array Method

// 1 push() : add to end
// 2 pop()  : delete from end & return
// 3 toString : Convert array to string



// 4 concat() : Joins multiple arrays & return result
// 5 unshift() : add to start
// 6 shift()  : delete from start & return



// 7 Slice() : return a piece of the array
        //    slice(startldx, endldx)

//8 Splice() : change original array(add, remove,replace)
       //   splice(startldx,delCount,newEl1...)







//1 push()

// let foodItems = ["potato","apple","litchi","tomato"];

// foodItems.push("chips", "burger", "paneer");

// console.log(foodItems);

//output-------> 

// ['potato','apple','litchi','tomato','chips', 'burger', 'paneer']

                

//2 pop()

// let foodItems = ["potato","apple","litchi","tomato"];

// foodItems.pop()
// console.log(foodItems)

//output-------> 

//   ['potato','apple','litchi']


//3 toString()

// let foodItems = ["potato","apple","litchi","tomato"];

// console.log(foodItems.toString());

// //output-------> 

// //   potato,apple,litchi,tomato


//4 concat()

// let marvelHeroes = ["thor","spiderman","ironman"];
// let dcHeroes = ["superman", "batman"];
// let indianHeroes =["saktiman", "krish"]

// let heroes = marvelHeroes.concat(dcHeroes,indianHeroes)

// console.log(heroes)

// //output-------> 

// 'thor', 'spiderman', 'ironman', 'superman', 'batman', 'saktiman', 'krish'

//5 unshift()

// let marvelHeroes = ["thor","spiderman","ironman"];

// marvelHeroes.unshift("antman");

// //output-------> 

// ['antman', 'thor', 'spiderman', 'ironman']

//6 shift()

// let marvelHeroes = ["thor","spiderman","ironman"];
// let val = marvelHeroes.shift();

// console.log("deleted", val);


//output-------> deleted thor



//7 Slice()

// let marvelHeroes = ["thor","spiderman","ironman","antman","Dr.Strange"];

// console.log(marvelHeroes.slice(2,4));

// //output-------> deleted thor

// //  ['ironman', 'antman']



//8 splice()
//splice(startldx,delCount,newEl1...)

let arr = [1,2,3,4,5,6,7];

arr.splice(2,2,101,102)

//output------->

// [1, 2, 101, 102, 5, 6, 7]

//Add Element
let ary = [1,2,3,4,5,6,7];
ary.splice(2,0,101)

//output------->
//[1, 2, 101, 3, 4, 5, 6, 7]

//Delete Element
let arz = [1,2,3,4,5,6,7]
arz.splice(3,1)

//output------->
//[1, 2, 3, 5, 6, 7]

//replace Element
let xyz = [1,2,3,4,5,6,7]
xyz.splice(3,1,101)

//output------->
//[1, 2, 3, 101, 5, 6, 7]