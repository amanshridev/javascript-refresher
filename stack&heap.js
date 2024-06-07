console.log("Hello World")

/*

Type of memory
1) Stack (Premetive)
2) Heap  (Non-Premetive)

Stack Memory: when every we declare a variable and assiend any data to it 

ex: ===>> let firstName = "Aman";

we get the copy of this data when ever we made any changes to it.


*/
// Stack Memory example: --------------------------

let firstName = "Aman";

let newName = firstName; 

console.log(newName);

newName = "Naman"; 

console.log(newName);

console.log(firstName);

// as shown in above newName take only copy when it get updated it didn't made any change in firstName
//this is stack memory





/*

Heap Memory: when every we declare any objects or array when its new data inserted the original
data get also effected 

ex: ===>> let users = {
firstName: "Aman",
};

we get the original refrance of the data.


*/
// Heap Memory example: --------------------------


let userOne = {
    userName: "Aman",
    };

    console.log(userOne)

let userTwo = userOne;

console.log(userTwo)

userTwo.userName = "Goku";

console.log(userOne)
console.log(userTwo)


// as shown in above userOne take refrance of the original data when it get updated it change original as well
//this is Heap memory


