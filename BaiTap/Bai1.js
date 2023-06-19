document.getElementById("title").innerHTML = "1";
var result = document.getElementById("result");
var n = 0;
function triTuyetDoi(n) {
  if (n >= 0) {
    result.value = n;
  } else {
    result.value = -n;
  }
}

triTuyetDoi(n);
