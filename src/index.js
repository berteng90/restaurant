import "./style.css";
import logo from "./img/logo.png";
import { generateHome } from "./home.js";

function generateDom() {
  //Generate Header
  const header = document.createElement("header");
  const div = document.createElement("div");
  div.classList.add("nav");
  const home = document.createElement("h1");
  home.textContent = "HOME";
  const menu = document.createElement("h1");
  menu.textContent = "MENU";
  const contact = document.createElement("h1");
  contact.textContent = "ABOUT";
  const blogo = new Image();
  blogo.src = logo;
  div.appendChild(blogo);
  div.appendChild(home);
  div.appendChild(menu);
  div.appendChild(contact);
  console.log(div.childNodes);
  div.childNodes.forEach((Node) => {
    Node.addEventListener("click", () => {
      console.log("Hello");
    });
  });
  document.body.appendChild(header);
  header.appendChild(div);

  //Generate Content
  const content = document.createElement("div");
  content.classList.add("wrapper");
  document.body.appendChild(content);

  //Generate content based on page selected
  generateHome();

  ///Generate Footer
  const foot = document.createElement("footer");
  document.body.appendChild(foot);
  const par2 = document.createElement("p");
  par2.textContent = "All Rights Reserved ©";
  foot.appendChild(par2);
}

generateDom();
