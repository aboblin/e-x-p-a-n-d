var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var stop_button = document.getElementById("stop");
var requestID;

var animate = function(){
	
	stopAnimate();
	
	var expand = true;
	var rad = 1;
	
	var expand_question = function(e){
		if (rad == canvas.width/2 || rad == 0){
			expand = !expand;
		}
	};

	var expand_dong = function(){

		ctx.clearRect(0,0, canvas.width, canvas.height);

		if (expand) {
		ctx.beginPath();
		ctx.arc(canvas.width/2, canvas.height/2, rad, 0, 2 * Math.PI);
		ctx.stroke();
		rad += 1;
		}

		else if (!expand){
		ctx.beginPath();
		ctx.arc(canvas.width/2, canvas.height/2, rad, 0, 2 * Math.PI);
		ctx.stroke();
		rad -= 1;
		}

		expand_question();
		requestID = window.requestAnimationFrame(expand_dong);	

	};
	
	expand_dong();

};

var stopAnimate = function(){
	window.cancelAnimationFrame(requestID);
}

stop_button.addEventListener('click', stopAnimate);
canvas.addEventListener('click', animate );