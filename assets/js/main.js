

"use strict";

var button = document.querySelector(".load_users");
var loadingGif = document.querySelector(".loading_gif");

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

