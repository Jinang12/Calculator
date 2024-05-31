
function getInput(){
let buttons = document.getElementsByClassName("btns");
buttons=Array.from(buttons);
buttons.forEach(button => {
    button.addEventListener('click', function() {
        let id = this.id;
        let elem=document.getElementById(id);
        let screen=document.querySelector(".inner");
        let content=document.createElement("p");
        content.textContent=elem.textContent;
        screen.appendChild(content);
    });
});
}
getInput();

function Delete() {
    let elem = document.querySelector(".inner");
    let last = elem.lastChild;
    elem.removeChild(last);
}

function DeleteAll() {
    let element = document.querySelector(".inner");
    let children = Array.from(element.children); 
    children.forEach(child => {
        element.removeChild(child);
    });
}

function Evaluate() {
    let element=document.querySelector(".inner");
    let calc=element.textContent;
    DeleteAll();
    let result=eval(calc);
    let print=document.createElement("p");
    print.textContent=result;
    element.appendChild(print);
}
