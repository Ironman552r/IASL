function canvasSize(width,height,color/*,canvas*/){
	canvas.width = width;
	canvas.height = height;
	canvas.style.background = color;
}
function Rect(topleft,topright,width,length,color){
	c.fillStyle = color;
	c.fillRect(topleft,topright,width,length);
}
function strokeRect(topleft,topright,width,length,color){
	c.strokeStyle = color;
	c.strokeRect(topleft,topright,width,length);
	
}
function allRect(topleft,topright,width,length,color,color2){
	c.strokeStyle = color;
	c.strokeRect(topleft,topright,width,length);
	c.fillStyle = color2;
	c.fillRect(topleft,topright,width,length);
}
function line(x1,y1,x2,y2,color){
	c.beginPath();
	c.moveTo(x1,y1);
	c.lineTo(x2,y2);
	c.strokeStyle = color;
	c.stroke();
}
function point(xcord,ycord,color){
	c.fillStyle = color
	c.fillRect(xcord,ycord,1,1);
}
function circle(xcc,ycc,radious,counterclockwise,stroke,color){
	c.beginPath();
	c.arc(xcc,ycc,radious,0,Math.PI*2,counterclockwise,stroke,color)
	c.strokeStyle = stroke;
	c.fillStyle = color;
	c.fill();
	c.stroke();
}
function arc(xc,yc,radious,startAngle,endAngle,counterclockwise,stroke,color){
	c.beginPath();
	c.arc(xc,yc,radious,startAngle,endAngle,counterclockwise);
	c.strokeStyle = stroke;
	c.fillStyle = color;
	c.fill();
	c.stroke();
}
function refresh(){
	c.clearRect(0,0,window.innerWidth,window.innerHeight);
}
function write(texting,BLxtoCenter,BLytoCenter,color,font){
	c.font = font;
	c.fillStyle = color;
	c.textAlign = 'center';
	c.fillText(texting,BLxtoCenter,BLytoCenter);
}
function animate(){
	requestAnimationFrame(markUp);

	refresh();
}
function addAnimationTo(functionToAnimate){
	requestAnimationFrame(functionToAnimate);

	refresh();
}
function triangle(point1x,point1y,point2x,point2y,point3x,point3y,color){
	c.beginPath();
	c.moveTo(point1x,point1y);
	c.lineTo(point2x,point2y);
	c.lineTo(point3x,point3y);
	c.fillStyle = color;
	c.fill()
}
function background(color){
	c.fillStyle = color;
	c.fillRect(0,0,width,height);
}




















var canvas = document.querySelector("canvas");
var c = canvas.getContext('2d');

var width = window.innerWidth;
var height = window.innerHeight;
//start of what you see when you setup





	
//don't see this
format();
markUp();
	