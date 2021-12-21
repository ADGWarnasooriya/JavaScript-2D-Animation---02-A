var boxmarginLeft = 0;
var d;
var boxAnimationId = 0;

function start() {
    d = document.createElement("div");
    d.className = "d";

    var x1 = Math.random() * 1000;
    boxmarginLeft = Math.floor(x1);
    d.style.marginLeft = boxmarginLeft + "px";

    var b = document.getElementById("b");
    b.appendChild(d);

    boxAnimationStart();
}

function boxAnimation() {
    boxmarginLeft = boxmarginLeft - 10;
    d.style.marginLeft = boxmarginLeft + "px";
}

function boxAnimationStart() {
    setInterval(boxAnimation, 200);
}