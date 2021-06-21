var mouseevent="Empty";
var lastpositionofX,lastpositionofY;
var color="hotpink";
var widthoftheline=1;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",Mymousedown);
function Mymousedown(){
    mouseevent="mousedown";
    console.log(mouseevent);
}
canvas.addEventListener("mouseup",Mymouseup);
function Mymouseup(){
    mouseevent="mouseup";
    console.log(mouseevent);
}
canvas.addEventListener("mousemove",Mymousemove);
function Mymousemove(e){
  currentpositionofmouseX=e.clientX-canvas.offsetLeft;
  currentpositionofmouseY=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthoftheline;
    ctx.moveTo(lastpositionofX,lastpositionofY);
    ctx.lineTo(currentpositionofmouseX,currentpositionofmouseY);
    ctx.stroke();
}  
lastpositionofX=currentpositionofmouseX;
lastpositionofY=currentpositionofmouseY;
}