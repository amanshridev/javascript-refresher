// console.log("Function")

/*

What is Function?
Functions are one of the main body building block of the programming.
it work as a package in which we declare some amount of code and we can only use that function
apart for the whole code which make our code more readable and compact

*/

//Example: 

function sayMyName () {
    console.log("My name is Aman")
}

// sayMyName();

// function addNumber (num1, num2) {
//     console.log(num1 + num2)
// }

// addNumber(4, 6);

/*

when we define function and pass data it is known as parameter.
Ex: function addNumber(num1, num2)

when we execute the function and pass data it is known as argument.
Ex: addNumber(4, 6)

*/

/* 

Return statement in function.

if we try to access the value of a function on a variable we didn't get the desired output
take above as example: 
const result = addNumber(4, 6);
and if we console the result we will get un defined
*/

function addNumber (num1, num2) {
    console.log(num1 + num2)
}

const result = addNumber(4, 6);

// console.log(result);

/*

To access the function value inform of a variable we need a return to access the exact value
function addNumber (num1, num2) {
    return num1 + num2
}
 
const result = addNumber(4, 6);

console.log(result);

now if we console result value the code will work properly 

*/

function addNumber (num1, num2) {
    return num1 + num2
}
 
const newResult = addNumber(4, 6);

//console.log(newResult);

//Note: By default if we write any code after a return statement that code will not get executed 

function addNumber (num1, num2) {
    return num1 + num2
    console.log("Aman Shrivastav")
}
 
const mainResult = addNumber(4, 6);

// console.log("m Result: ", mainResult);

function userLoggedIn(userName) {
    return `${userName} logged In`
}

// let userFun = userLoggedIn("Aman Shrivastav")

// console.log(userFun)

//If we didn't pass any value we will get undefined

function userLoggedIn(userName) {
    return `${userName} logged In`
}

// let userFun = userLoggedIn()

// console.log(userFun)

//to tackle this problem we can add a check to the function execution time

function userLoggedIn(userName) {
    if(userName === undefined){
        console.log("User is undefined")
        return
    }
    else{
        return `${userName} logged In`
    }
}

// let userFun = userLoggedIn()

// console.log(userFun)

function userLoggedIn(userName) {
    if(userName === undefined){
        console.log("User is undefined")
        return
    }
    else{
        return `${userName} logged In`
    }
}

let userFun = userLoggedIn("Aman Shrivastav")

// console.log(userFun)

//Rest Operator in Function "..."

/*

suppose we have multiple values coming from arguments of a function for that we need lot's of
a  lot's of parameter.
but suppose we don't know how many more values are coming to the function for that we use rest operator

Example

*/

function cartValueAddition(...values){
    return values
}

console.log(cartValueAddition(20, 50, 60, 100, 200, 1000, 40))

//what rest operator dose is took all the value and put them together into a single array. by which we can perform any calculation easily.


const user = {
    username: "Aman",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));




