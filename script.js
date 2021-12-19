function start() {
    var d = document.createElement("div");
    d.className = "d";

    var x = Math.random() * 1000;
    d.style.marginLeft = 500 + "px";

    var b = document.getElementById("b");
    b.appendChild(d);
}