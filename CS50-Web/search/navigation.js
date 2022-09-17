function toBuy() {
    window.location.href = "buy.html"
}

function toHome() {
    window.location.href = "home.html"
}

function toSell() {
    window.location.href = "sell.html"
}

function toLogin() {
    window.location.href = "login.html"
}

document.getElementById("add").onclick  = function() {

    var node = document.createElement("Li");
    var text = document.getElementById("user_input").value; 
    var textnode=document.createTextNode(text);
    node.appendChild(textnode);
    document.getElementById("list_item").appendChild(node);
}