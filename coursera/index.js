let div = document.getElementById("#special");
let elemP = document.getElementsByTagName("p");
for (let i = 0; i < elemP.length; i++) {
  elemP[i].style.color = "blue";
}

let p = document.querySelectorAll("#special .someclass");
for (let i = 0; i < p.length; i++) {
  p[i].style.color = "green";
}

document.querySelector(".change-me").innerHTML = "Apaandah";

const button = document.querySelector(".add");
button.setAttribute("name", "helloButton");
button.setAttribute("id", "myButton");

const cb = document.querySelector("input");
console.log(cb.checked);
cb.setAttribute("checked", "checked");
console.log(cb.checked);

/**
 * Creating Elements and Text Nodes
 */
const appendElement = () => {
  let myP = document.createElement("p");
  let txt = document.createTextNode(
    "This is unsing createElement() and createTextNode()"
  );
  myP.appendChild(txt);
  document.querySelector("div").appendChild(myP);
};

button.addEventListener("click", appendElement);

/**
 * Removing elements
 */
const btnRemove = document.querySelector(".remove");
btnRemove.addEventListener("click", () => {
  const myDiv = document.querySelector("div");
  myDiv.removeChild(myDiv.children[myDiv.children.length - 1]);
});
