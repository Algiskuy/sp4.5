// var tutorial = document.getElementById("tutorial");

var x = 0;
var berkurang = document.getElementById("min");
var reset = document.getElementById("reset");
var nambahan = document.getElementById("plus");

tutorial.innerHTML = `<h2>${x}</h2>`;
berkurang.onclick = function () {
  x--;
  tutorial.innerHTML = `<h2>${x}</h2>`;
};

tutorial.innerHTML = `<h2>${x}</h2>`;
reset.onclick = function () {
  tutorial.innerHTML = `<h2>${x}</h2>`;
  x = 0;
};

tutorial.innerHTML = `<h2>${x}</h2>`;
nambahan.onclick = function () {
  x++;
  tutorial.innerHTML = `<h2>${x}</h2>`;
};
