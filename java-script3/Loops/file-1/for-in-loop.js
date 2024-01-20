//For-in Loop


// example

let student = {
    name: "Gaurav Gupta",
    age: 21,
    cgpa: 8.5,
    ispass: true,
}

for (let key in student){
    console.log("key=", key, "value", student[key]);
}

// Output


// key= name value Gaurav Gupta
// key= age value 21
// key= cgpa value 8.5
// key= ispass value true