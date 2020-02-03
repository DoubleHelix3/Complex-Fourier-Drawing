// Math for complex numbers
function Complex(re, im) {this.re = re; this.im = im}
const add = (x,y) => new Complex(x.re+y.re, x.im+y.im);
const multiply1 = (x,y) => new Complex(x.re*y.re-x.im*y.im, x.re*y.im + x.im*y.re);
const multiply2 = (a,x) => new Complex(a*x.re, a*x.im);
const exp = (t) => new Complex(Math.cos(t), Math.sin(t));
const zero = new Complex(0,0)