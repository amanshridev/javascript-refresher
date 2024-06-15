/*

This: This ("this") is a keyword that was introduce in es6 in 2015.
it is used to refer the current context 

Example

*/ 

let user = {

    userName: "Aman",
    date: new Date(2024, 5, 15),
    welcomeGreet: function() {
        console.log(`${this.userName}, is logged In`)
    }
}

// user.welcomeGreet();

user.userName = "github"  //context changed here

// user.welcomeGreet();

// it will take the current reference of the value like it did with userName

// Note: this can not be used inside a function

//Example

// function newUser() {
//     let lastName = "Shrivastav"
//     console.log(this.lastName)
// }

// newUser() //we get undefined

// Arrow Function or ("() =>") also introduce from es6. used as a normal function the only change is syntax

///Example

let newUser = () => {
    console.log("function")
}

// newUser()

/* 

Implicit return: means if we only have a single return of small code there is no need to write return 
in arrow function. js take it as a return 

*/

//Example

// const add = (num1, num2) => num1 + num2

// console.log(add(5,6)) //this will work as a implicit return

//another way to declare

const add = (num1, num2) => (num1 + num2)

console.log(add(5,6)) //this will work as a implicit return



