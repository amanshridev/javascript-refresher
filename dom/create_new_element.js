let parentElement = document.querySelector('.parent')

// console.log(parentElement)
// console.log(parentElement.children)
// console.log(parentElement.children[1].innerText)

// parentElement.children[1].style.backgroundColor = 'red';

for (let i = 0; i < parentElement.children.length; i++) {
    const element = parentElement.children[i];
    element.style.color = "orange"
    element.style.padding = "10px"
    element.style.fontFamily = "Roboto"
}

// console.log(parentElement.firstElementChild)

const weekDay = document.querySelector('.day')
// console.log(weekDay);
// console.log(weekDay.parentElement);
// console.log(weekDay.nextElementSibling);

console.log("Nodes: ", parent.childNodes);


//Create and add element through js

/*

When we create an element it saved into memory not directly shown to browser for that we need a method
ie createTextNode after this we will append this value to our div element and after it we set our document 
to show that value

*/

const div = document.createElement('div')
    console.log(div);
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "12px"
    const addText = document.createTextNode("First Element Created")
    div.appendChild(addText)

    document.body.appendChild(div)
