let toNode = document.querySelector("#to")
let slNode = document.querySelector("#sl")
let paNode = document.querySelector("#pa")
let ohNode = document.querySelector("#oh")
let morzeNode = document.querySelector("#morze")
kod = "";
toNode.addEventListener("click", function () {kod = kod + "•"; morzeNode.innerHTML = kod; });
slNode.addEventListener("click", function() {kod = kod + "-"; morzeNode.innerHTML = kod; });
paNode.addEventListener("click", function () { kod= kod + " "; morzeNode.innerHTML = kod; });
ohNode.addEventListener("click", function () {kod = ""; morzeNode.innerHTML = kod; });

