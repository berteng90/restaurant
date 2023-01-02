import img01 from "./img/burger01.png";

export function generateHome() {
  const cont = document.querySelector(".wrapper");
  const info = document.createElement("div");
  info.classList.add("info");
  const par1 = document.createElement("p");
  const left_box = document.createElement("div");
  const right_box = document.createElement("div");
  left_box.classList.add("leftbox");
  right_box.classList.add("rightbox");
  info.appendChild(left_box);
  info.appendChild(right_box);
  const image01 = new Image();
  image01.src = img01;
  par1.textContent = "Best Burgers in Town!";
  left_box.appendChild(par1);
  right_box.appendChild(image01);
  cont.appendChild(info);
}
