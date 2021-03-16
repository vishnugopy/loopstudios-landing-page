

const icon_burger = document.querySelector('.humbergermenu');
const menu = document.querySelector('.special');


let count = 0;
icon_burger.addEventListener('click',() => {
    count++; 
    menu.classList.toggle('show');
    if (count%2 === 0) {
        icon_burger.setAttribute("src", "images/icon-hamburger.svg");
        document.body.style.overflow = "visible";
        
    }
    else {
        icon_burger.setAttribute("src", "images/icon-close.svg");
        document.body.style.overflow = "hidden";
    }
 
    
    console.log(count);
} )