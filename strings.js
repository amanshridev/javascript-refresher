//String is set of words

console.log("this is a string");

//to add two strings we use +( plus or concatination ) sign

console.log("this is a string" + " " + "of concatination");


// Better way to use string is to use template literals ` ` and placeholders ${}


//Template literals Example

let firstString = `This is the example of template literals`;

console.log(firstString)

//Placeholder Example

let firstName = "Example";

let templateLiterals = `This is the ${firstName} of placeholder`
 
console.log(templateLiterals)

//new way to declare string

let newString = new String ("Aman")

console.log(newString);

//Methods in string

console.log(newString[0])

console.log(newString.__proto__)

console.log(newString.length)

console.log(newString.toUpperCase())

console.log(newString.toLowerCase())




