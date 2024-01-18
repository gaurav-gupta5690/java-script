//conditional statement

//     If Statement

let age = 25;

if (age >= 18) {
    console.log("you can vote")
}

if (age > 18){
    console.log("you CANNOT vote")
}

//  EXAMPLE 1


let mode = "dark";
let color;

if ( mode === "dark") {
    color = "Black";
}

if (mode === "light") {
    color = "white";
}

console.log(color);


// EXAMPLE 2
// IF YOU ARE 18 OR 18+ THEN YOU CAN VOTE
// IF YOU ARE LESS THAN 18 THEN YOU CAN NOT VOTE


{let age = 18;
    
    if (age >= 18) {
        console.log("you can Vote")
    }
    
    if (age < 18) {
        console.log("you can NOT Vote")
    } }



    {let age = 18;
        
        if (age <= 17) {
        console.log("you can vote")
    }
    
    if (age > 17) {
        console.log("you can NOT vote")
    } }


    //DARK MODE OR LIGHT MODE

    {
        let mode = "DARK"
        let color;

    if(mode === "DARK") {
        color = "BLACK"
    }

    if(mode === "Light") {
        color = "WHITE"
    }
    console.log(color);
    }    