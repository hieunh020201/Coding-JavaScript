document.getElementById("title").innerHTML = "7";
var result = document.getElementById("result");
var a = -1;
var b = 6;
var c = 1;
var x1 = 0,
  x2 = 0;
function timNghiem2(a, b, c) {
  var dt = b * b - 4 * a * c;
  if (dt > 0) {
    x1 = (-b - Math.sqrt(dt)) / (2 * a);
    x2 = (-b + Math.sqrt(dt)) / (2 * a);
    result.value = x1.toFixed(2) + "và" + x2.toFixed(2);
  } else if (dt == 0) {
    x1 = -b / (2 * a);
    result.value = x1 + "và" + x2;
  } else {
    result.value = "Vô nghiệm";
  }
}

timNghiem2(a, b, c);
