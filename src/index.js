require('./style.css');

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
    document.body.appendChild(header);
    document.body.appendChild(content);
    header.appendChild(div);
    const par1=document.createElement('p');
    const img1=document.createElement('img');
    par1.textContent="Best Fried Chicken in Town!";
    content.appendChild(par1);
    content.appendChild(img1);

}

component();
