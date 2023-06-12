let width = window.innerWidth;
let height = window.innerHeight;


let btn = document.querySelector("#btn");

console.log(`width da tela: ${width}, height: ${height}`);

const inter = setInterval(() => {
  width = window.innerWidth;
  height = window.innerHeight;

  document.body.innerHTML = "<button id = 'btn'> stop interval </button>";
  btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    console.log("intervalo parado");
    clearInterval(inter);
  });

  let a = Math.floor(Math.random() * 50) + 10;

  for (let i = 0; i < a; i++) {
    let div = document.createElement("div");
    let cpx = Math.floor(Math.random() * width) - 20;
    let cpy = Math.floor(Math.random() * height) - 20;

    div.style.translate = `${cpx}px ${cpy}px`;

    let ct = Math.floor(Math.random() * 3);

    switch (ct) {
      case 0:
        div.classList.add("small");
        break;
      case 1:
        div.classList.add("medium");
        break;
      case 2:
        div.classList.add("big");
        break;
      default:
        div.classList.add("bigger");
    }

    let cc = Math.floor(Math.random() * 6);

    switch (cc) {
      case 0:
        div.classList.add("orange");
        break;
      case 1:
        div.classList.add("blue");
        break;
      case 2:
        div.classList.add("green");
        break;
      case 3:
        div.classList.add("pink");
        break;
      default:
        div.classList.add("pink");
    }

    document.body.append(div);
  }
}, 4000);
