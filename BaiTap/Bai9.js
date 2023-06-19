document.getElementById("title").innerHTML = "9";
var result = document.getElementById("result");
var a = 40;
var b = 10;
var c = 40;
function timMin(a, b, c) {
  if (a >= b && b >= c) {
    result.value = c;
  } else if (a >= b && b <= c) {
    result.value = b;
  } else if (a <= b && b <= c) {
    result.value = a;
  } else {
    result.value = c;
  }
}

timMin(a, b, c);
