

let interval;

let startTime = function(){
    interval = setInterval(timeFun, 1000)

    function timeFun(){
        console.log("Aman", Date.now())
    }
}
let stopTime = function(){
    clearInterval(interval)
}

document.querySelector('#start').addEventListener('click', startTime)
document.querySelector('#stop').addEventListener('click', stopTime)