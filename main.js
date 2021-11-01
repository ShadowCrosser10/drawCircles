var mouse_events = "";
var last_x_pos, last_y_pos;


canvas = document.getElementById("theCanvas");
ctx = canvas.getContext("2d");

var color = "blue"
var ln_width = 1;
var radius = 20;



canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    mouse_events = "mouseDown"
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {
    var current_x_pos = e.clientX - canvas.offsetLeft;
    var current_y_pos = e.clientY - canvas.offsetTop;
    
    if (mouse_events == "mouseDown") {
        console.log("Current position of x and y coordinates = ");
        console.log("X  = " + current_x_pos + "Y = " + current_y_pos);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = ln_width;
        
        ctx.arc(current_x_pos, current_y_pos, radius ,0 , 2 * Math.PI);
        ctx.stroke();
        
    }
}

canvas.addEventListener("mouseup", my_mouseup)
function my_mouseup(e) {
        mouse_events = "mouseUp"
}


canvas.addEventListener("mouseleave", my_mouseleave)
    function my_mouseleave(e) {
        mouse_events = "mouseLeave"
    }
