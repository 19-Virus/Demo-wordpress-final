const right = document.querySelector('#arrow');
const subFrame = document.querySelector('#subFrame');

let slideNumber = 1;
const cards = document.querySelectorAll('.card');

right.addEventListener('click', ()=>{
    if(slideNumber < cards.length){
        subFrame.style.transform = `translateX(-${390*slideNumber}px)`;
        slideNumber++;
    }
    else{
        subFrame.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }
    
});


const button = document.querySelector('#slideButton');

const slider = document.querySelector('#slider');

let Number = 1;
const logo = document.querySelectorAll('.clientLogo');

button.addEventListener('click', ()=>{
    if(Number < logo.length){
        slider.style.transform = `translateX(-${180*Number}px)`;
        Number++;
    }
    else{
        slider.style.transform = `translateX(0px)`;
        Number = 1;
    }
    
});



const rightSlider = document.querySelector('#rightSlider');

const lastSubFrame = document.querySelector('#lastSubFrame');

let sliderNumber = 1;

const sliderCard = document.querySelectorAll('.sliderCard');

rightSlider.addEventListener('click', ()=>{
    if(sliderNumber < sliderCard.length){
        lastSubFrame.style.transform = `translateX(-${400*sliderNumber}px)`;
        sliderNumber++;
    }
    else{
        lastSubFrame.style.transform = `translateX(0px)`;
        sliderNumber = 1;
    }
    
});




let scrollContainer = document.querySelector("#gallery");

let subGallery = document.querySelector(".subGallery");

let slideImage = document.querySelectorAll('.slideImages');

const bottom = document.querySelector('#bottom');

for(let i=0; i<slideImage.length; i++){
    const div = document.createElement('div');
    div.className = 'circleButton';
    bottom.appendChild(div);
}

const buttons = document.querySelectorAll('.circleButton');

buttons[0].style.backgroundColor = 'rgb(255, 76, 60)';

const resetBg = ()=>{
    buttons.forEach((circleButton)=>{
        circleButton.style.backgroundColor = 'rgb(203, 203, 203)';
    })
}

buttons.forEach((circleButton, i) =>{
    circleButton.addEventListener('click',()=>{
        resetBg();
        subGallery.style.transform = `translateX(-${i*550}px)`;
        circleButton.style.backgroundColor = 'rgb(255, 76, 60)';

    })
})

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});