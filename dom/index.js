console.log("Js is working")

//To access the attribute of the html element
let check = document.getElementById('heading')
let checkAtt = check.getAttribute('id')
// console.log(checkAtt)
// console.log(check)


//To add style through js
check.style.color = "red"
check.style.padding = "10px"


//There are 3 ways to get   
// let show = check.innerText
// let show = check.innerHTML
let show = check.textContent
// console.log(show)

/* 

Difference between innerText and innerContent

if we add any other tag like <span> in our content and set it display none
innerText only show what is visible but innerContent show the whole content even if it is set
display none

and innerHTML will show the html tags also of the content

*/



//More Real World Selectors

/* 

querySelector: It select the first element from the all the same elements present there.

Example: we take 3 h2 in our html page and we will user querySelector and let see what output we will 
get

*/

let newSelector = document.querySelector('h2');

// console.log(newSelector)

/* 

querySelectorAll: It select the All element from the same elements present there.

Example: we take 3 h2 in our html page and we will user querySelectorAll and let see what output we will 
get

*/

let newSelector2 = document.querySelectorAll('h2');

console.log(newSelector2)

/*

By default querySelectorAll give us a NodeList which some might mistake as an array but it is not
it is similar but not an array
*/

//How to select value in a node list Example
// newSelector2[0].style.color = "red"

newSelector2.forEach( (list) => {
   list.style.backgroundColor = "#212121";
   list.style.color = "#fff";
   list.style.padding = "10px";
})
