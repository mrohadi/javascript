// document.getElementById("one").style?.color = "red";
let elemP = document.getElementsByTagName("p");
for (let i = 0; i < elemP.length; i++) {
  elemP[i].style.color = "blue";
}

let p = document.querySelectorAll(".someclass");
for (let i = 0; i < p.length; i++) {
  p[i].style.color = "yellow";
}
