let requestUrl = `https://api.github.com/users/amanshridev`


let xsr = new XMLHttpRequest();
xsr.open('GET', requestUrl);

let profile = document.getElementById('user');

xsr.onreadystatechange = function () {
    console.log(xsr.readyState)
    if (xsr.readyState === 4) {
        let data = JSON.parse(this.responseText)
        // console.log(data)

        let h1 = document.createElement('h1');
        let userName = document.createTextNode(`${data.name}`);
        h1.appendChild(userName);
        document.body.appendChild(h1);
    }else {
        let h1 = document.createElement('h1');
        let userName = document.createTextNode(`Failed To Fetch`);
        h1.appendChild(userName);
        document.body.appendChild(h1);
    }
}

xsr.send()

