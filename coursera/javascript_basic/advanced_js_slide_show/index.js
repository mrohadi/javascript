(function () {
  const arrImg = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];

  let imgIndex = 0;

  const btnNext = document.querySelector("#next");
  const btnPrev = document.querySelector("#previous");
  const content = document.querySelector("#content");

  const slideImg = () => {
    const newImg = document.createElement("img");
    newImg.setAttribute("src", `slides/${arrImg[imgIndex]}`);
    newImg.setAttribute("class", "fadeinimg");
    content.appendChild(newImg);
    content.removeChild(content.children[0]);
  };

  btnNext.addEventListener("click", (e) => {
    e.preventDefault();
    imgIndex++;
    if (imgIndex >= arrImg.length - 1) imgIndex = 0;
    slideImg();
  });

  btnPrev.addEventListener("click", () => {
    imgIndex--;
    if (imgIndex <= 0) imgIndex = arrImg.length - 1;
    slideImg();
  });
})();
