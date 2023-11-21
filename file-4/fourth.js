                             //Data Types

                            
//There are two types of Data types                             


//1)Primitive Data types                             

//NUMBER TYPES

let age = 21;
let price = 100.50;

//string

let fullName = "Gaurav Gupta"
let fathername = 'Sanjay Gupta'

//boolean

let isFollow = true
let ismarried = false

//undefined

let x;
let y;

//null

let m = null
let n = null

//bigInt

let k = BigInt("286438764");           //output
                                       //123n
                                       //typeof k
                                       //bigInt


//symbol

let h = Symbol("Hello!");


//2) Non-Primitive Data Types

//Array


//Objects----> collections of values

const student = {
    fullName : "Gaurav Gupta",
    age : 21,
    marks : 80,
    ispass : true,
}
//multiple collection
console.log(student)

//single collection types
console.log(student.fullName) //OR //console.log(student["fullName"])
console.log(student.age)      //OR //console.log(student["age"])
console.log(student.marks)    //OR //console.log(student["marks"])
console.log(student.ispass)   //OR //console.log(student["isPass"])


