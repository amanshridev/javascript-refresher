let firstNumber = 500;

console.log(firstNumber)

/*

Above is the simple way to describe a number but there is  a even better way to do it
that is by using "Number" method

*/

//----Example----

let newNumber = new Number(100)

console.log(newNumber)

// Number Methods

console.log(newNumber.toString())

console.log(typeof newNumber.toString())

//Fixed number is used as to round off numbers in largen number set

let fixedNumber = 50.2456789

console.log(fixedNumber.toFixed(2))

//Precision used for roundoff the value and also give exponetial fixed

console.log(fixedNumber.toPrecision(3))

//Locale String is used to define as  standard values to saperates commas according to counrty standard

let hundred = 1000000

console.log(hundred.toLocaleString('en-IN'))


/*

+++++++++++++++++++++++Maths++++++++++++++++

this is a default object in javascript

*/

//abs or absolute value is used as to negative value in positive value

console.log(Math.abs(-10))

//round is used to remove decimels values in a round off number

console.log(Math.round(10.54))
//celing is used to get top round value
console.log(Math.ceil(10.12))
//floor is used to get lower round value
console.log(Math.floor(10.12))

//Random values will always give value in 0-1
console.log(Math.random())





