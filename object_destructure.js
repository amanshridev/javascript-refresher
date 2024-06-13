console.log("Objects");

/*

In JavaScript, objects are data structures that store key-value pairs. 
Keys are strings, and values can be any type of data, including other objects, functions, 
or arrays. by default every key in objects is treated as a string.

*/
//Example of objects

let firstObject = {
    firstName: "Aman",
    secondName: "Shrivastav",
    age: 27,
    "email" : "mail@mail.com"
}

// console.log(firstObject)

//by accessing the key we can only use a perticular value from object for example:
// console.log(firstObject.firstName)

//a better way to access objects. 

// console.log(firstObject["firstName"])


//in this way if we use "" to declare a key this will access it. while the basic method throw error

// console.log(firstObject["email"])

//to made any changes in an object we can access the key and assigned new value to it

firstObject.email = "newmail@mail.com"

// console.log(firstObject);

//there is also a method through which we can freeze our object which means that no longer updates will done to it

// Object.freeze(firstObject)

// firstObject.email = "newmai1111l@mail.com"

// console.log(firstObject);


//we ca also use function as a variable inside an object example: 

firstObject.greeting = function() {
    console.log("Hello User")
}

// console.log(firstObject.greeting())

//Note : some time we get undefined as well in console when executing a function. we will cover in other notes


//we can also access the value of an object by using this method

firstObject.greetingNew = function() {
    console.log(`Hello ${this.firstName}`)
}

// console.log(firstObject.greetingNew())

//How to declare Object as a singleton

const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Aman"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aman",
            lastname: "Shrivastav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//object destructing is spread data of other object and create a new object

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js notes",
    price: "99",
    courseInstructor: "aman"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Aman",
//     "coursename": "js notes",
//     "price": "free"
// }





