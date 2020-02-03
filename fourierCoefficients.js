// Turn path into a function
const N = path.length;

// Turn it into a function
function f(t) { // t in [0,1]/N
	const n = Math.floor(t*N);
	return path[n];
}

// Integrals
function integral(f, N) {
	const deltaX = 1/N;
	let sum = new Complex(0,0);
	
	for(var x=0; x<=1; x+=deltaX) {
		sum = add(sum, multiply2(deltaX, f(x)));
	}

	return sum;
}

// Array of coefficients
const M = 500; // number of vectors - 1
let coefficients = [];

function fourierCoefficient(n) { // n is number of revolutions
	const g = (t) => multiply1(f(t), exp(-2*Math.PI*n*t));
	return integral(g, N);
}

// Calculate the coefficients
for (var n = -0.5*M; n<=0.5*M; n++) {
	coefficients[n] = fourierCoefficient(n);
}

/*
// Display the coefficients
var outputTo = document.getElementById("output");
outputTo.innerHTML = formattedCoefficients();

function formattedCoefficients() {
	var formattedCoefficients = ""
	function addToFormattedCoefficients(c) {formattedCoefficients += "new Complex("+c.re+", "+c.im+"), <br>"}
	coefficients.forEach(addToFormattedCoefficients);

	return formattedCoefficients
}
*/