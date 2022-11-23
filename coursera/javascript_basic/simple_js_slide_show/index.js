(function () {
  const arrImg = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
  ];

  let imgIndex = 0;
  const img = document.querySelector("img");

  const btnNext = document.querySelector("#next");
  btnNext.addEventListener("click", () => {
    imgIndex++;
    if (imgIndex >= arrImg.length - 1) imgIndex = 0;
    img.setAttribute("src", arrImg[imgIndex]);
  });

  const btnPrev = document.querySelector("#previous");
  btnPrev.addEventListener("click", () => {
    imgIndex--;
    if (imgIndex <= 0) imgIndex = arrImg.length - 1;
    img.setAttribute("src", arrImg[imgIndex]);
  });
})();
