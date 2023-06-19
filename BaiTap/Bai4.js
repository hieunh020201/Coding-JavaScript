document.getElementById("title").innerHTML = "4";
var result = document.getElementById("result");
var a = 7;
var b = 6;
function timSoLonNhat(a, b) {
  if (a >= b) {
    result.value = a;
  } else {
    result.value = b;
  }
}

timSoLonNhat(a, b);
