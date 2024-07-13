//Sync Js: Jab tk ek task complete nhi hoga second task run nhi hoga, Example;

// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");

/* 

Sabse pehle 1 console challa fir 2 wala ye line me chala isko line by line chalne ko sync js bolte hai 

*/

//Async Js: Sare task sath me run hoge but jo pehle complete hoga uska output pehle milega

setTimeout(() => {
  console.log("1");
}, 100);

console.log("2");

/* 

to sabse pehle second task complete hua to wo run hua uske baad first ise async js bolte hai

*/
