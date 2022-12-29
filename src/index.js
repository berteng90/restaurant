import './style.css';
import img01 from './img/burger01.png';
function component(){
    const header=document.createElement('header');
    const div=document.createElement('div');
    div.classList.add('nav');
    const home=document.createElement('h1');
    home.textContent='HOME';
    const menu=document.createElement('h1');
    menu.textContent='MENU';
    const contact=document.createElement('h1');
    contact.textContent='CONTACT US';
    div.appendChild(home);
    div.appendChild(menu);
    div.appendChild(contact);
    const content=document.createElement('div');
    content.classList.add('wrapper')
    const info=document.createElement('div');
    info.classList.add('info')
    content.appendChild(info);
    document.body.appendChild(header);
    document.body.appendChild(content);
    header.appendChild(div);
    const par1=document.createElement('p');
   const image01=new Image();
   image01.src=img01
    par1.textContent="Best Burgers in Town!";
    info.appendChild(par1);
    info.appendChild(image01);

}

component();
