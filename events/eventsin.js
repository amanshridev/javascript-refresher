
/* 

An event listener in JavaScript is a function that waits for a specific event to occur
like clicking a button, and then responds to it. like on clicking a button and something happened. 
When an event occurs, the event listener is triggered and the function it contains is executed.
When we add an event we need to pass 3 values 
1: Type of Event: click, hover etc
2: Function: Inside Which we add any functionality.
3: Boolean Value: this is optional, because by default it treat it as false

example: document.querySelector('id').addEventListener('event type', function(){}, boolean)

*/

// document.getElementById('naruto').addEventListener('click', function () {
//     alert('Naruto Boiii')
// }, false)//by default it is false

//____EVENTS TO LEARN___
// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


/*

Event Propagation: Event passed from one element to another is known as event propagation.

this is of 2 types:
1. Event Bubbling
2. Event Capturing

*/


/*

Event Bubbling: in this propagation the event goes from child to the parent element,  to get 
this behavior the boolean value should be false

here is an example

*/

// document.getElementById('anime-list').addEventListener('click', function () {
//     console.log('Anime List')
// }, false)

// document.getElementById('naruto').addEventListener('click', function () {
//     console.log('Naruto Boiii')
// }, false)


/*

Event Capturing: in this propagation the event goes from parent to the child element, to get 
this behavior the boolean value should be true

here is an example

*/

// document.getElementById('anime-list').addEventListener('click', function () {
//     console.log('Anime List')
// }, true)

// document.getElementById('naruto').addEventListener('click', function () {
//     console.log('Naruto Boiii')
// }, true)

//to stop this propagation we can use events

//Example

document.getElementById('anime-list').addEventListener('click', function () {
    console.log('Anime List')
})

document.getElementById('naruto').addEventListener('click', function (e) {
    console.log('Naruto Boiii')
    e.stopPropagation()//this will stop propagating event
})