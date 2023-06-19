document.getElementById("title").innerHTML = "8";
var result = document.getElementById("result");
var a = 1;
var b = 2;
var c = 3;
function timTamGiac(a, b, c) {
  if (a + b > c || a + c > b || b + c > a) {
    result.value = "Đây là tam giác";
  } else {
    result.value = "Đây không phải là tam giác";
  }
}

timTamGiac(a, b, c);
