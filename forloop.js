//For loop

for (let i = 0; i <= 6; i++) {
    const element = i;
    // console.log(element)
}

for (let i = 0; i <= 6; i++) {
    const element = i;

    if(element == 1){
        // console.log("Hey")
    }

    // console.log(element)
}

for (let i = 0; i <= 6; i++) {
    // console.log(`First loop ${i}`)
    for(let j =1; j<= 10; j++){
        // console.log(`second loop ${j}`)
    }
}

let anime = ['naruto', 'one piece', 'dragon ball', 'one punch man']

for (let index = 0; index < anime.length; index++) {
    const element = anime[index];
    // console.log(element)
}

//Break and Continue

// for (let index = 1; index <= 20; index++) {
//     const element = index;

//     if(element == 5){
//         console.log(`Desired value reached ${element}`);
//         break; //to stop the running of the code when we reached a desired output
//     }

//     console.log(`Values ${element}`)
    
// }

for (let index = 1; index <= 20; index++) {
    const element = index;

    if(element == 5){
        console.log(`Desired value reached ${element}`);
        continue; //to skip the condition of the code when we reached to it
    }

    console.log(`Values ${element}`)
    
}