// console.log("Arrays in js");

// /*

// The Array object, as with arrays in other programming languages, enables storing a collection 
// of multiple items under a single variable name, and has members for performing common array 
// operations.

// In Js Arrays are non-primitive type of data.

// arrays are muteble and resizble.

// arrays can also have different types of data type.

// array index always start  with 0
// ex: let array = [ 1, 2, 3, 4];
//     let array = [ 5, 2, 3, 4];

// so the index of 1, 5 or any other value will always start with 0

// */

// let array = [ 5, 2, 3, 4];


// //Example for how to call an index value in array
// console.log(array[0]);

// console.log(array[3]);

// //index cannot be called as following

// console.log(array["one"]);

// //Note Array uses shallow copy or the direct refrance of the data.


// //Other Way to create an array 

// let array2 = new Array(1,2,3,4)

// //In this method there is need to use [] brackets 

// console.log(array2)

// //Method in Array

// //1: push: this is used for inserting new elements at the end of array

// array2.push(8)

// console.log(array2)

// //2: pop: this is used for removing a element from the end of the array. and no need any argument

// array2.pop()

// console.log(array2)

// //3: unshit: this is used for inserting new elements at the starting of array

// array2.unshift(18)

// console.log(array2)

// //4: shift: this is used for removing a element from the starting of the array. and no need any argument

// array2.shift()

// console.log(array2)

// //5: includes: this is used for searching an element in array and return in boolen

// console.log(array2.includes(2))

// //6: index: this is used for showing index of an element in array

// console.log(array2.indexOf(2))


// let myArr = [0, 1, 2, 3, 4, 5, 6]

// console.log("A ", myArr);


// //7: slice: is used to take a copy of array from the given range  without altering original array

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)



// console.log(myn1);

// console.log("B ", myArr);

// //8: splice: is used to make new array by manupaleting the original array

// const myn2 = myArr.splice(1, 3)

// console.log("C ", myArr);

// console.log(myn2);

let narutoChareters = ["Naruto", "Sasuke", "Kakashi", "Trash", "Hinata", "Jiraya"];

let onePieceChareters = ["Luffy", "Zoro", "Sanji", "Ussop", "Brook", "Chopper"];

// narutoChareters.push(onePieceChareters)

// console.log(narutoChareters)

//8: Concat: add two array as one and returns a new array for example:

let animeChar = narutoChareters.concat(onePieceChareters)

animeChar.push("Goku")

// console.log(animeChar)

//9: Spread operator "..." : this is a better way to merge more then 2 arrays in one in concat we can only merege 2 arrays

let newAnime = [...onePieceChareters, ...narutoChareters, ...animeChar]

console.log(newAnime)

