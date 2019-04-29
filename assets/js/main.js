"use strict";

let button = document.querySelector(".load_users");
let loadingGif = document.querySelector(".loading_gif");

console.log(button);
button.addEventListener("click", buttonClicked.bind(null, loadingGifShow, loadingGifHide));

function buttonClicked (callback1, callback2, event) {
    console.log("Button clicked");
    callback1();
    setTimeout(callback2, 2000);
}

function loadingGifShow () {
    loadingGif.classList.remove("hide");
}

function loadingGifHide () {
    loadingGif.classList.add("hide");
}

function request() {
    let url = "https://jsonplaceholder.typicode.com/users";

    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.onload = (event) => {
        console.log(JSON.parse(event.target.response));
        ;
    }
    xhr.send(null);
}
request();

