// Ques 1] prompt the user to enter their full name. Generate a username for them based on the input. Start username with @, followed by their full name and ending with the fullname lengh

//eg: username = "apnasahar" , username should be "@apnasahar9


let fullname = prompt("Enter your fullname without spaces");

let username = "@" + fullname + fullname.length;

console.log(username);