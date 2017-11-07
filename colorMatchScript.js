//var rValue = 127;
//var gValue = 127;
//var bValue = 127;


function myFunction() {
    var rValue = document.getElementById("rSlider").value;
    var gValue = document.getElementById("gSlider").value;
    var bValue = document.getElementById("bSlider").value;

    var colorString = "background-color: rgb(" + rValue + "," + gValue + "," + bValue  + ")";

    document.body.setAttribute("style", colorString);
}


function randomColor() {
    document.getElementById("targetSquare").setAttribute("style", rgb(255,255,255));

        //"color: rgb(" + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + "," + (Math.floor(Math.random() * 256)) + ")");

}




document.getElementById("rSlider").addEventListener("onchange", myFunction);
document.getElementById("gSlider").addEventListener("onchange", myFunction);
document.getElementById("bSlider").addEventListener("onchange", myFunction);

document.getElementById("targetSquare").addEventListener("mouseenter", randomColor(),false);
