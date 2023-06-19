document.getElementById("title").innerHTML = "3";
var result = document.getElementById("result");
var a = 1.3;
var b = 1.89998;
var cv = 0;
function tinhChuViHCN(a, b) {
  vc = 2 * (a + b);
  result.value = vc.toFixed(2);
}

tinhChuViHCN(a, b);
