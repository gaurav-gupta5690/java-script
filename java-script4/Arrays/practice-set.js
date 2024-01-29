//Lets Practice

//Ques 1) For a given arrays with marks of students-> [85,97,44,37,76,60] Find the average marks of the entire class.

// let marks = [85,97,44,37,76,60]

// let sum = 0

// for (let val of marks){
//     sum +=val;
// }
// let avg = sum / marks.length;
// console.log(`avg marks of the class ${avg}`);


//Ques 2) For a given array with prices of 5 items-> [250,645,300,900,50] All items have an offer of 10% OFF on them. change the array to store final price after applying offer.

// method 1


// let items = [250,645,300,900,50]
// let i = 0

// for(let val of items){
//     let offer = val/10;
//     items[i]= items[i] - offer;
//     console.log(`value after offer = ${items[i]}`)
//     i++;
// }

//method 2

let items = [250,645,300,900,50]

for(let i=0; i< items.length; i++){
    let offer = items[i] /10
    items[i] -= offer;
}

console.log(items)