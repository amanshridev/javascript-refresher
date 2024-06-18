function   addingAnime(animeList){
    let animeName = document.createElement('li')
    animeName.innerHTML = `${animeList}`
    document.querySelector(".anime").appendChild(animeName)
}

addingAnime("Black Clover")


function addOptiLanguage(animeList){
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(animeList))
    document.querySelector('.anime').appendChild(li)
}
addOptiLanguage('One Piece')

//Edit
const addingMoreAnime = document.querySelector(".anime li:nth-child(1)")
// console.log(secondLang);
//secondLang.innerHTML = "Mojo"
const newli = document.createElement('li')
newli.textContent = "Dragon ball z"
addingMoreAnime.replaceWith(newli)

//edit
const firstLang = document.querySelector(".anime li:last-child")
firstLang.outerHTML = '<li>Haikyuu</li>'

//remove
const lastLang = document.querySelector('.anime li:last-child')
lastLang.remove()
