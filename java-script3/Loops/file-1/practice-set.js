//practice qs 1


//Q1) print All number 0 to 100

//  Input

// for (let num = 0; num <= 100; num++){
//     console.log("num =", num);
// }

// Output

// num = 0
// num = 1
// num = 2
// num = 3
// num = 4
// .
// .
// num = 100



//Q2) print All even number from 0 to 100


// for (let num = 0; num <= 100; num++){
//     if(num%2 ===0)
//     console.log("num =", num);
// }

// Output

// num = 0
// num = 2
// num = 4
// num = 6
// num = 8
// .
// .
// num = 100


//Q3) print All Odd number from 0 to 100


// for (let num = 0; num <= 100; num++){
//     if(num%2 !==0)
//     console.log("num =", num);
// }

// Output

// num = 0
// num = 1
// num = 3
// num = 5
// num = 7
// .
// .
// num = 100

//--------------------------------------------------


// Iterate 0 to 10 using for loop, do the same using while and do while loop

// (a) FOR LOOP

// for(let i = 0;i < 11; i++){
//     console.log(i);
// }

// // (b) WHILE LOOP  
// let i = 0;
// while (i < 11) {
//    console.log(i);
//    i++;
// }
// // (c) DO WHILE LOOP 
// let x = 0;
// do {
//    console.log(x);
//    x++;
// } while (x < 11); 


// Iterate 10 to 0 using for loop, do the same using while and do while loop

// 2(a) FOR LOOP
// for (let i = 10; i > -1; i--) {
//     console.log(i);
//  }
//  // 2(b) WHILE LOOP  
//  let i = 10;
//  while (i > -1) {
//     console.log(i);
//     i--;
//  }
//  // 2(c) DO WHILE LOOP 
//  let x = 10;
//  do {
//     console.log(x);
//     x--;
//  } while (x > -1);

//  Iterate 0 to n using for loop

// let n = 6;
// for (let i = 0; i <= n; i++) {
//    console.log(i);
// }

//Write a loop that makes the following pattern using console.log():

//                   #
//                   ##
//                   ###
//                   ####
//                   #####
//                   ######
//                   #######


// for(i = 1; i <= 7; i++) {
//     console.log("#".repeat(i));
//}


//  Use loop to print the following pattern:

//0 x 0 = 0
//1 x 1 = 1
//2 x 2 = 4
//3 x 3 = 9
//4 x 4 = 16
//5 x 5 = 25
//6 x 6 = 36
//7 x 7 = 49
//8 x 8 = 64
//9 x 9 = 81
//10 x 10 = 100


// for(let i = 0;i < 11; i++){
//     console.log(i + "x" + i + "="+ i*i );
// }

//Using loop print the following pattern

//  for(let i = 0; i < 11; i++) {
//     console.log(i + "\t" + i*i + "\t" + i**3);
//  }


 //Use for loop to iterate from 0 to 100 and print only even numbers

//  for(let i = 0; i < 100; i+=2){
//     console.log(i)
//  }

 //Use for loop to iterate from 0 to 100 and print only odd numbers

//  for(let i = 1; i < 100; i+=2){
//     console.log(i)
//  }

//Use for loop to iterate from 0 to 100 and print only prime numbers

//


//Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// let sum = 0;
// for(let i = 0; i < 101; i++) {
//    sum += i;
// } console.log("The Sum of all number from 0-100 is ", sum);


//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.


// let sumEven = 0;
// let sumOdd  = 0;
// for (let i = 0; i < 101; i++) {
//     if (i%2==0) sumEven += i;
//     else sumOdd += i;
//  } console.log(sumEven, sumOdd);