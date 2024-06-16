const anime = ["naruto", "one piece", "dragon ball z", "one punch man", "SWA"];


// let animeName = anime.forEach((index) => {
//     console.log(index);
// })

// console.log(animeName)

//Note A ForEach loop always return a undefined value

let animeName = anime.forEach((index) => {
    // console.log(index);
    return;
})

// console.log(animeName)

//To resolve this issue filter came in 

//Lets take a new array

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let newNum = nums.filter(  (index) => (index >=5) )

// console .log(newNum);

//Exercise

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let userBuy = books.filter( (book) => (book.genre == "Non-Fiction") )
  let userBuy = books.filter( (book) => ( book.publish > 2000) )

  console.log(userBuy)

  //Question: find all the books that have genre history and edition is greater 2005

  

