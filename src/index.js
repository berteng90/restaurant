function component(){
    const content=document.createElement('div');
    document.body.appendChild(content);
    console.log("test");
    return content;
}
component();