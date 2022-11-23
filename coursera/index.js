// let div = document.getElementById("#special");
// let elemP = document.getElementsByTagName("p");
// for (let i = 0; i < elemP.length; i++) {
//   elemP[i].style.color = "blue";
// }

// let p = document.querySelectorAll("#special .someclass");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.color = "green";
// }

// document.querySelector(".change-me").innerHTML = "Apaandah";

// const button = document.querySelector(".add");
// button.setAttribute("name", "helloButton");
// button.setAttribute("id", "myButton");

// const cb = document.querySelector("input");
// console.log(cb.checked);
// cb.setAttribute("checked", "checked");
// console.log(cb.checked);

/**
 * Creating Elements and Text Nodes
 */
// const appendElement = () => {
//   let myP = document.createElement("p");
//   let txt = document.createTextNode(
//     "This is unsing createElement() and createTextNode()"
//   );
//   myP.appendChild(txt);
//   document.querySelector("div").appendChild(myP);
// };

// button.addEventListener("click", appendElement);

/**
 * Removing elements
 */
// const btnRemove = document.querySelector(".remove");

// const deleteMe = () => {
//   const myDiv = document.querySelector("div");
//   myDiv.removeChild(myDiv.children[myDiv.children.length - 1]);
// };
// btnRemove.addEventListener("click", () => {
//   const myDiv = document.querySelector("div");
//   myDiv.removeChild(myDiv.children[myDiv.children.length - 1]);
// });
// btnRemove.onclick = deleteMe;
// btnRemove.removeEvent

/**
 * Events
 */
// const btn = document.querySelector("button");
// btn.addEventListener("click", (event) => {
//   event.target.style.background = "red";
//   console.log(event);
// });
// const form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   const name = document.querySelector("input").value;
//   alert(name);
// });
// const p1 = document.querySelector("p");
// const box = document.querySelector("div");
// box.addEventListener("mouseover", () => {
//   p1.innerHTML = "The mouse is over the box!";
// });
// box.addEventListener("mouseout", () => {
//   p1.innerHTML = "Roll your mouse over the boxes";
// });

// let pagetop;
// window.addEventListener("scroll", () => {
//   pagetop = window.scrollY;
//   console.log(pagetop);
// });

/**
 * Scope
 */
// function init() {
//   fullName = "Muhammad Rohadi";
//   // return fullName;

//   displayName = () => {
//     console.log(fullName);
//   };
//   displayName();
// }

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   // let x = new init();
//   init();
// });

// function makeFunc() {
//   const name = "Muhammd Roahadi";
//   function displayName() {
//     console.log(name);
//   }

//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

// function adder(x) {
//   return function (y) {
//     return x + y;
//   };
// }

// const add = adder(10);
// console.log(add(10));

// const makeCounter = () => {
//   let privateCounter = 0;

//   const changeBy = (value) => {
//     privateCounter += value;
//   };

//   return {
//     value() {
//       return privateCounter;
//     },
//     increment() {
//       changeBy(1);
//     },
//     decrement() {
//       changeBy(-1);
//     },
//   };
// };

// const counter1 = makeCounter();
// console.log(counter1);
// console.log(counter1.value());
// counter1.increment();
// console.log(counter1.value());
// console.log(button);

// function MyObject(name, message) {
//   this.name = name?.toString();
//   this.message = message?.toString();
// }

// MyObject.prototype = {
//   getName() {
//     return this.name;
//   },
//   setName(value) {
//     this.name = value;
//   },
//   getMessage() {
//     return this.message;
//   },
//   setMessage(value) {
//     this.message = value;
//   },
// };

// const obj = new MyObject();
// console.log(obj.getName());

/**
 * Simple JS Slide Show
 */
