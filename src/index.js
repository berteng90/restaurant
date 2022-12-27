function component(){
    const header=document.createElement('header');
    const home=document.createElement('h1');
    const menu=document.createElement('h1');
    const contact=document.createElement('h1');
    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(menu);

    const content=document.createElement('div');
   
    console.log("test");
    return [header, content];
}
document.body.appendChild(component());