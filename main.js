var mouseevent ="empty" ;

var last_positon_X,last_positon_Y
 canvas=document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

Color="red";
Width_of_line="2";

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    Color = document.getElementById("Color").value;
    Width_of_line = document.getElementById ("Width_of_line").value;
    Radius = document.getElementById ("Radius").value;
 mousevent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
 current_position_of_x=e.clientX-canvas.offsetLeft;
 current_position_of_y=e.clientY-canvas.offsetTop;
 if(mouseevent=="mouseDown"){

    console.log("current_position_of_x and y");
    console.log("x="+current_position_of_x+"y="+current_position_of_y);
    console.log("last_position__X and Y");
    console.log("X="+last_position_x+"Y="+last_position_Y);

     ctx.beginPath();
     ctx.strokeStyle=Color;
     ctx.lineWidth= Width_of_line;
     ctx.arc(current_position_of_x , current_position_of_y , Radius , 0 , 2*Math.PI);
     ctx.stroke();
 }
 last_position_x=current_position_of_x;
 last_position_Y=current_position_of_y;

}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
 mouseevent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
 mouseevent="mouseLeave";
}
function clear_drawing(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}