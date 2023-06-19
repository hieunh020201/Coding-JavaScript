document.getElementById("title").innerHTML = "10";
var result = document.getElementById("result");
var a = 400;
var b = 1000;
var c = 5000;
var d = 10;
function timMax(a, b, c, d) {
  if (a >= b) {
    if (c >= d) {
      if (a >= c) {
        result.value = a;
      } else {
        result.value = c;
      }
    } else {
      if (a >= d) {
        result.value = a;
      } else {
        result.value = d;
      }
    }
  } else {
    if (c >= d) {
      if (b >= c) {
        result.value = b;
      } else {
        result.value = c;
      }
    } else {
      if (b >= d) {
        result.value = b;
      } else {
        result.value = d;
      }
    }
  }
}

timMax(a, b, c, d);
