// Logical operators

//  logical AND---->  &&
//  logical OR----->  ||
//  logical NOT---->  !





//  logical AND---->  &&


{
    let a = 6;
    let b = 5;

    let cond1 = a > b;  // true
    let cond2 = a === 6; // true

    console.log( " cond1 && cond2 = ", cond1 && cond2); //true
}

{
    let a = 6;
    let b = 5;

    let cond1 = a > b;  // true
    let cond2 = a === 5; // false

    console.log( " cond1 && cond2 = ", cond1 && cond2); //false
}


{
    let a = 6;
    let b = 5;

    let cond1 = a < b;  // false
    let cond2 = a === 5; // false

    console.log( " cond1 && cond2 = ", cond1 && cond2); //false
}




//  logical OR----->  ||

{
    let a = 6;
    let b = 5;
    console.log("cond1 || cond2", a < b || a ===6) //true
}

//  logical NOT---->  !

{
    let a = 6;
    let b = 5;
    console.log("!(6<5)", !(a < b) ) //its false but define true
}

{
    let a = 6;
    let b = 5;
    console.log("!(6<5)", !(a === 6) ) //its true but define false
}