//The forEach is a method of Array instances executes a provided function once for each array element.

const anime = ["naruto", "one piece", "dragon ball z", "one punch man", "SWA"];

// there are three ways we can use forEach

//1

anime.forEach( function(item){
    // console.log(item)
})

//2

anime.forEach( (item) => {
    // console.log(item)
})

//Arrow function comes with 2 different values other then item ie Index and the whole array

anime.forEach( (item, index, arr) => {
    // console.log(item, index, arr)
})

//3

function animeName (item) {
//   console.log(item)
}

anime.forEach(animeName) // don't need to invoke the function only needs to give the reference


const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageFileName)
})