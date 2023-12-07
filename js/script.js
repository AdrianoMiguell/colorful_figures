const divFigures = document.querySelector("#colorful_figures");

let btn = document.querySelector("#btn-stop");

const initialize = async () => {
  const data = await getDataOptions();

  const sizes = data.class.sizes;
  const colors = data.class.colors;

  generateSquareColor(sizes, colors);

  // const inter = setInterval(() => {
  //   generateSquareColor(sizes, colors);
  // }, 10000);
};

const getDataOptions = async () => {
  const response = await fetch("./json/classOptions.json");
  const options = await response.json();

  return options;
};

const generateSquareColor = async (sizes, colors) => {
  width = window.innerWidth;
  height = window.innerHeight;

  divFigures.innerHTML = "";

  let elemTot = Math.floor(Math.random() * 50) + 15;

  for (let i = 0; i < elemTot; i++) {
    let div = document.createElement("div");
    let pageWidth = Math.floor(Math.random() * width) - 20;
    let pageHeight = Math.floor(Math.random() * height) - 20;

    div.style.translate = `${pageWidth}px ${pageHeight}px`;

    let elemSize = Math.floor(Math.random() * sizes.length);
    div.classList.add(sizes[elemSize]);

    let elemColor = Math.floor(Math.random() * colors.length);
    div.classList.add(colors[elemColor]);

    divFigures.appendChild(div);
  }
};

initialize();

// btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   console.log("intervalo parado");
//   clearInterval(inter);
// });

// for (let i = 0; i < 10; i++) {
//   console.log(Math.floor(Math.random() * (sizes.length)));
// }
