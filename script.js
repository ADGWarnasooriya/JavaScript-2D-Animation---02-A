function start() {
    var d = document.createElement("div");
    d.className = "d";

    var x1 = Math.random() * 1000;
    var x2 = Math.floor(x1);
    d.style.marginLeft = x2 + "px";

    var b = document.getElementById("b");
    b.appendChild(d);
}