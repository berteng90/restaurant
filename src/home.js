import img01 from "./img/burger01.png";

export function generateHome() {
  const content = document.createElement("div");
  content.classList.add("wrapper");
  const info = document.createElement("div");
  info.classList.add("info");
  content.appendChild(info);
  document.body.appendChild(content);
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
  left_box.appwendChild(par1);
  right_box.appendChild(image01);

  //Footer
}
