document.getElementById("title").innerHTML = "2";
var result = document.getElementById("result");
var a = 2;
var b = 4;
var sum = 0;
function tongHaiSoNguyen(a, b) {
  sum = a + b;
  result.value = sum;
}

tongHaiSoNguyen(a, b);
