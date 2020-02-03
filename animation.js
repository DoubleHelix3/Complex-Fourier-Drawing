// Set up canvas
var canvas = document.getElementById("canvas");
var brush = canvas.getContext("2d");
let width = canvas.width;
let height = canvas.height;
brush.strokeStyle = "white";

// Convert complex numbers to screen coordinates
const speed = 0.5;
const zoom = 1;
const x = (z) => 0.5*width + zoom*z.re;
const y = (z) => 0.5*height + zoom*z.im;

// Start the animation loop
window.requestAnimationFrame(drawFrame)
let tracePath = [];
let tracePathIndex = 0;

// Drawing a frame
function drawFrame(time) { // the time
	let t = speed*time/10000; // t value

	// Clear the screen
	brush.clearRect(0, 0, width, height);

	// Draw background
	brush.fillRect(0,0,width,height);

	// Draw the array of vectors
	function drawVector(x1,y1,x2,y2) {
		// Body of arrow
		brush.beginPath();
		brush.moveTo(x1,y1);
		brush.lineTo(x2,y2);
		brush.closePath();
		brush.stroke();

		// TODO: Head of arrow
	}

	var sum = zero;
	function drawFourierVector(c, n) {
		const u = multiply1(c, exp(2*Math.PI*n*t));
		const newSum = add(sum, u);
		drawVector(x(sum), y(sum), x(newSum), y(newSum));
		sum = newSum;
		n++;
	}
	for(var n = 0; n<=0.5*M; n++) {
		drawFourierVector(coefficients[n], n);
		if(n == 0) continue;
		drawFourierVector(coefficients[-n], -n);
	}

	// Draw the path traced by the vectors
	tracePath[tracePathIndex] = sum; // update the path
	tracePathIndex++;

	brush.beginPath();
	for (var i = 0; i < tracePath.length; i++) {
		brush.lineTo(x(tracePath[i]),y(tracePath[i]));
	}
	brush.stroke();

	// Draw the next frame
	window.requestAnimationFrame(drawFrame)
}