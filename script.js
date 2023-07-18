let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click",() => toggleNavbar());


const openbox = document.querySelector(".catalogue .btn-catalogue");
const popupbox = document.querySelector(".popup-screen");
const closebtn = document.querySelector(".popup-screen .popup-box .close");

openbox.addEventListener("click", () => {
    popupbox.classList.add("active");
})
closebtn.addEventListener("click", () => {
    popupbox.classList.remove("active");
})
