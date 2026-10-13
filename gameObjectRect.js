var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x = 250;
var y = 125;
var rectColor = "black";

function drawRect()
{
    // context.clearRect(0, 0, canvas.width, canvas.height);

    // context.beginPath();
    // context.arc(x, y, radius, 0, 360 * Math.PI / 180, true);

    

    context.fillStyle = rectColor;
    context.fill();

    
//    x = x + xSpeed;
//    y = y + ySpeed;
   
}

setInterval(drawRect, 20);