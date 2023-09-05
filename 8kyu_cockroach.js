//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

//For example:

//1.08 --> 30

//Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

// 100,000 cm in 1 km; 3600 s in 1 h
function cockroachSpeed(s) {
  return Math.floor(s * (100000/3600))
}