'use strict';

const handleColorChange = () => {
    const colorChanges = document.querySelectorAll('.color-change');
    for(const color of colorChanges) {
        if(color.style.color === "") {
            color.setAttribute('style', 'color: red;');
            document.querySelector('.color-changer').innerHTML = 'Go Back!!';
        } else {
            color.removeAttribute('style');
            document.querySelector('.color-changer').innerHTML = 'Click Me!';
        }
    }
}


const handleValidNumber = (evt) => {
    evt.preventDefault();
    const userInput = document.querySelector('#number-input');
    const userNum = Number(userInput.value);
    if(isNaN(userNum)) {
        alert('It\'s not number type!!');
    } else {
        const formFeedBack = document.querySelector('#formFeedback');
        
        if(userNum >= 10) {
            formFeedBack.innerHTML = 'Please enter a smaller number.';
        } else {
            formFeedBack.innerHTML = "You are good to go!.";
        }
    }
}


document.querySelector('.number-form').addEventListener('submit', handleValidNumber);
document.querySelector('.color-changer').addEventListener('click', handleColorChange);