//The scope is the current context of execution in which values and expressions are "visible" or can be referenced

/*

type of scope
1: Local Scope
2: Global Scope

*/



//Local Scope: The scope created within a pair of curly braces is local scope Example: 

if(true){

    //This is local scope
}

//Global Scope: The default scope for all code running is Global Scope Example:

//this is global scope 
if(true){

    //This is local scope
}

/*

This issue was mainly created by var keyword.
here is how: if we define a variable from a name

like: var firstName = "Aman";

and some other developer also declare a variable from the same name.

like var firstName = "github"

then what happens that our code will take the latest value of variable.

Example

*/

// var firstName = "Aman";

// var firstName = "github"

// console.log(firstName)

// this also  happens even if we declare it inside a scope

///Example:


var firstName = "Aman";

if(true){
    var firstName = "github"
}


// console.log(firstName)


//Nested Scope

function one() {

    const userName = "Aman"

    function two() {
        const lastName = "Shrivastav"
        console.log(userName)
    }

    // console.log(lastName)  Note: A variable out its scope cannot be access.

    two()

}

one()
