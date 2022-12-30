import './style.css';
import img01 from './img/burger01.png';
import logo from './img/logo.png';

function component(){

    //Header & Navigation
    const header=document.createElement('header');
    const div=document.createElement('div');
    div.classList.add('nav');
    const home=document.createElement('h1');
    home.textContent='HOME';
    const menu=document.createElement('h1');
    menu.textContent='MENU';
    const contact=document.createElement('h1');
    contact.textContent='ABOUT';
    const blogo=new Image();
    blogo.src=logo
    div.appendChild(blogo)
    div.appendChild(home);
    div.appendChild(menu);
    div.appendChild(contact);

    //Content
    const content=document.createElement('div');
    content.classList.add('wrapper')
    const info=document.createElement('div');
    info.classList.add('info')
    content.appendChild(info);
    document.body.appendChild(header);
    document.body.appendChild(content);
    header.appendChild(div);
    const par1=document.createElement('p');
    const left_box=document.createElement('div');
    const right_box=document.createElement('div');
    left_box.classList.add('leftbox')
    right_box.classList.add('rightbox')
    info.appendChild(left_box);
    info.appendChild(right_box);
   const image01=new Image();
   image01.src=img01
    par1.textContent="Best Burgers in Town!";
    left_box.appendChild(par1)
    right_box.appendChild(image01)

    //Footer

    const foot=document.createElement('footer');
    document.body.appendChild(foot);
    const par2=document.createElement('p');
    par2.textContent='All Rights Reserved ©'
    foot.appendChild(par2);
    
}

component();
