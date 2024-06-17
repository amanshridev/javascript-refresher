let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let updatedNum = nums.map( (num) => num + 5  )

// console.log(updatedNum)

//Chaining 

let updatedNum = nums
                    .map( (num) => num + 5  )
                    .map((num) => num * 10)
                    .filter( (num) => num <= 100 )

console.log(updatedNum)

