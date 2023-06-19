document.getElementById("title").innerHTML = "6";
var result = document.getElementById("result");
var a = 2024;
function tinhPhepChia(a) {
  if (a % 4 === 0) {
    result.value = "Năm nhuận";
  } else {
    result.value = "Năm không nhuận";
  }
}

tinhPhepChia(a);
