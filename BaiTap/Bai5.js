document.getElementById("title").innerHTML = "5";
var result = document.getElementById("result");
var a = 5;
var b = 6;
var kq = 0;
function tinhPhepChia(a, b) {
  if (b != 0) {
    kq = a / b;
    result.value = kq;
  } else {
    result.value = "Chia không được";
  }
}

tinhPhepChia(a, b);
