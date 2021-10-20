document.getElementsByTagName("button").onclick = function(onclick) {
    create();
}

function insert(para) {
    let body = document.getElementsByTagName("body");
    body.appendChild(para);
}

function addText() {
    let postHTML = document.getElementsByTagName("p");
    let post = document.getElementsByTagName("input").value;
    postHTML.innerHTML = post;
}

function create() {
    let postPara = document.createElement("p");
    addText();
    insert(postPara);
}