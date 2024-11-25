const toggle = document.getElementById("toggle");
const navMenu = document.getElementById("nav-menu");
const menu = document.getElementById("main-menu");
const buttonSetting = Array.prototype.slice.call(document.querySelectorAll(".container__icon__setting"));
const containerSetting = Array.from(document.querySelectorAll(".container__items__setting"));
const buttonSilderRight = document.querySelector(".fa-thumbs-up");
const buttonSilderLeft = document.querySelector(".fa-thumbs-down");
let colorPropertybuttonRigth="#333";
let colorPropertybuttonLeft="#333";
let buttonDoubleclickRight = "#888";
let buttonDoubleclickLeft = "#888";
let lastbuttonDoubleclick =0;

const DIRECTION ={
    RIGTH: "RIGTH",
    LEFT: "LEFT"
};


toggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--show");
    menu.classList.toggle("menu__bar--show");
});


buttonSetting.forEach((element ,indexElement) =>
    element.addEventListener("click", () => {
        containerSetting.forEach((items,indexItem)=>{
            if(indexElement === 0 && indexItem === 0){
                items.classList.toggle("container__items__setting--show");
            }else if (indexElement === 1 && indexItem === 1){
                items.classList.toggle("container__items__setting--show");
            }
        });
    }
));


function addLike(direction) {

    if (direction === DIRECTION.RIGTH) {
        
        colorPropertybuttonLeft = "#333";
        buttonDoubleclickLeft = "#888";
        buttonSilderRight.style.color = colorPropertybuttonRigth;
        buttonSilderLeft.style.color = "#888";
        lastbuttonDoubleclick = colorPropertybuttonRigth;
        colorPropertybuttonRigth = buttonDoubleclick;
        buttonDoubleclick = lastbuttonDoubleclick;

    } else if (direction === DIRECTION.LEFT) {

        colorPropertybuttonRigth = "#333";
        buttonDoubleclick = "#888";
        buttonSilderLeft.style.color = colorPropertybuttonLeft;
        buttonSilderRight.style.color = "#888";
        lastbuttonDoubleclick=colorPropertybuttonLeft;
        colorPropertybuttonLeft=buttonDoubleclickLeft;
        buttonDoubleclickLeft = lastbuttonDoubleclick;
    }
}


    buttonSilderRight.addEventListener("click",()=>addLike(DIRECTION.RIGTH));
    buttonSilderLeft.addEventListener("click",()=>addLike(DIRECTION.LEFT));
    

window.addEventListener("resize", () => {
    if (navMenu.classList.contains("nav__menu--show")) {
        navMenu.classList.remove("nav__menu--show");
        menu.classList.remove("menu__bar--show");
    }
});


function validator_input(){

}



