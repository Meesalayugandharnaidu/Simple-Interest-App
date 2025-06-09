const btn = document.getElementById("btn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  let a = document.getElementById("Amount").value;
  let y = document.getElementById("YEARS").value;
  let i = document.getElementById("INTEREST").value;

  a = Number(a);
  y = Number(y);
  i = Number(i);

  if (a > 0 && y > 0 && i > 0) {
    let result = INTEREST(a, y, i);
    let total = a + result;
    document.getElementById("result").classList.add("active");
    document.getElementById("a").innerHTML = a;
    document.getElementById("y").innerHTML = y;
    document.getElementById("i").innerHTML = i;
    document.getElementById("S").innerHTML = result;
    document.getElementById("A").innerHTML = total;
    
    document.getElementById("Amount").value = "";
    document.getElementById("YEARS").value = "";
    document.getElementById("INTEREST").value = "";
  } else {
    alert("please fill the blankets");
  }
});

function INTEREST(a, y, i) {
  let simple = (a * y * i) / 100;
  return simple;
}
