console.log("Aleksey");

const shops = {
    shop_1: [
        './img/жидкости/liquid (1).jpg',
        './img/жидкости/liquid (2).jpg',
        './img/жидкости/liquid (3).jpg',
        './img/жидкости/liquid (4).jpg',
        './img/жидкости/liquid (5).jpg',
        './img/жидкости/liquid (6).jpg'
    ],
    shop_2: [
        './img/электронный девайс/eldevaice (1).jpg',
        './img/электронный девайс/eldevaice (2).jpg',
        './img/электронный девайс/eldevaice (3).jpg',
        './img/электронный девайс/eldevaice (4).jpg',
        './img/электронный девайс/eldevaice (5).jpg',
        './img/электронный девайс/eldevaice (6).jpg'
    ],
    shop_3: [
        './img/комплектующие/komplekt.jpg',
        './img/комплектующие/komplekt1.jpg',
        './img/комплектующие/komplekt2.jpg',
        './img/комплектующие/komplekt3.jpg',
        './img/комплектующие/komplekt4.jpg',
        './img/комплектующие/komplekt5.jpg'
    ],
    shop_4: [
        './img/дополнение/portfolio-img.jpg',
        './img/дополнение/portfolio-img (1).jpg',
        './img/дополнение/portfolio-img (2).jpg',
        './img/дополнение/portfolio-img (3).jpg',
        './img/дополнение/portfolio-img (4).jpg',
        './img/дополнение/portfolio-img (5).jpg'
    ],
}

const imagesLeft = Array.from(document.querySelectorAll('.slider_left > li > img'));
const imagesCenter = Array.from(document.querySelectorAll('.slider_center > li > img'));
const imagesRight = Array.from(document.querySelectorAll('.slider_right > li > img'));

let shop = 'shop_1';

function redrawPhoto(arr) {
    arr.forEach((image, index) => image.src = shops[shop][index]);
}

function changeImage(event) {
    shop = event.target.dataset.shop;
    redrawPhoto(imagesCenter);


    const buttons = document.querySelectorAll('.button');
    console.log(buttons);
    buttons.forEach(button => {
        if (button.dataset.shop == shop) {
            button.classList.add('button_colored');
        } else {
            button.classList.remove('button_colored');
        };
    });

};

function buttonClick(event) {
    if (event.target.classList.contains('portfolio__button')) {
        changeImage(event);
    };
};

document.querySelector('.portfolio__buttons').addEventListener('click', buttonClick);

//slider
function shiftPhoto(arrow) {
    let w;
    if (window.innerWidth >= 1024){
        w = 6;
    }
    else if (window.innerWidth >= 768 && window.innerWidth <=1023) {
        w = 4;
    }
    else {
        w = 1;
    }
    if (arrow == 'left') {
        shops[shop] = shops[shop].slice(w).concat(shops[shop].slice(0, w));
    } else if (arrow == 'right') {
        shops[shop] = shops[shop].slice(-w).concat(shops[shop].slice(0, -w));
    }
}

const slider = document.querySelector('.slider');

const buttonLeft = document.querySelector('.button_slider_left');
const buttonRight = document.querySelector('.button_slider_right');

function sliderLeft() {
    buttonLeft.removeEventListener('click', sliderRight);
    buttonRight.removeEventListener('click', sliderLeft);
    slider.classList.add('move_left');
    shiftPhoto('left');
    redrawPhoto(imagesRight);
};

function sliderRight() {
    buttonLeft.removeEventListener('click', sliderRight);
    buttonRight.removeEventListener('click', sliderLeft);
    slider.classList.add('move_right');
    shiftPhoto('right');
    redrawPhoto(imagesLeft);
};

slider.addEventListener('animationend', () => {
    redrawPhoto(imagesCenter);
    slider.classList.remove('move_left');
    slider.classList.remove('move_right');
    buttonLeft.addEventListener('click', sliderRight);
    buttonRight.addEventListener('click', sliderLeft);
});


buttonLeft.addEventListener('click', sliderRight);
buttonRight.addEventListener('click', sliderLeft);
const burger = document.querySelector('.burger');
const navBar = document.querySelector('.nav');
console.log(navBar);
burger.addEventListener('click', function(e) {
    this.classList.toggle('active');
    // navBar.classList.toggle('active__nav'); 
    if (navBar.classList.contains('nav__open')) {
        // console.log("Burger is opened");
        // navBar.classList.remove('nav__close');
        navBar.classList.remove('nav__open');
    } else {
        // console.log("Burger is closed");
        navBar.classList.add('nav__open');
        // navBar.classList.add('nav__close');
    }
})
