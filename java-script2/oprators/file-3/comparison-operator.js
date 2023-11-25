//Comparison Operators

//Maths Equalto

//    a = b
//    b = d

//Maths Not Equalto

//    a ≠ b
//    b ≠ d

//
// 1)  javascript Equalto

//        a == b
//        v == s

//2)   javascript Not Equalto

//        a != b
//        b != f






// 1)  javascript Equalto true or false also decleared (boolean)

                 //     ==

{
    let a = 5;
    let b = 3;

    console.log("5 == 3", a == b); //false
}

{
    let a = 5;
    let b = 5;

    console.log("5 == 5", a == b) // true
}

//2 javascript Not Equalto true or false also decleared
                   

{

    let a = 4
    let b = 7

    console.log("4 != 7", a != b) //true
}

{
    let a = 4
    let b = 4

    console.log( " 4 != 4", a != b) //false
}


// strick version 

// 1)    Equal to & type

// ===  triple equal 


{
    let a = 5
    let b = "5" //string---> number

    console.log( " 5 === 5", a === b) //false

}

{
    let a = 5
    let b = 5 //only---> number

    console.log( " 5 === 5", a === b) //true

}

// 2)      Not Equal to & type

//        !==   

{
    let a = 5
    let b = "5" //string---> number

    console.log( " 5 !== 5", a !== b) //true

}

{
    let a = 5
    let b = 5 //only---> number

    console.log( " 5 !== 5", a !== b) //false

}





//And extra operators

// > greater then
// >= greater then equal to
// < less then
// <= less then equal to



//   > greater then

{
    let a = 4
    let b = 7

    console.log("4 > 7", a > b) //false
}

{
    let a = 4
    let b = 3

    console.log( " 4 > 3", a > b) //true
}

// >= greater then equal to

{
    let a = 4
    let b = 7

    console.log("4 >= 7", a >= b) //false
}

{
    let a = 4
    let b = 4

    console.log( " 4 >= 4", a >= b) //true
}

// < less than


{
    let a = 4
    let b = 7

    console.log("4 < 7", a < b) //true 
}

{
    let a = 4
    let b = 3

    console.log( " 4 < 3", a < b) //false
}

// <= less then equal to

{
    let a = 4
    let b = 7

    console.log("4 <= 7", a <= b) //true
}

{
    let a = 4
    let b = 4

    console.log( " 4 <= 4", a <= b) //true
}