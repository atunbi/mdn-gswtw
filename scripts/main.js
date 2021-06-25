let myImage = document.getElementById('logo');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'media/firefox-logo-developer-edition.svg') {
        myImage.setAttribute('src','media/firefox-logo.svg')
    }   else {
        myImage.setAttribute('src','media/firefox-logo-developer-edition.svg')
    }
});

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Mozilla, ' + myName;
}

// if(!localStorage.getItem('name')) {
//     setUserName();
// }   else {
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Welcome to Mozilla, ' + storedName
// }

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        myHeading.textContent = 'Welcome to Mozilla'
    }   else {
                localStorage.setItem('name', myName);
                myHeading.textContent = 'Welcome to Mozilla, ' + myName;
            }
}

// function setUserName() {
//     let myName = prompt('Please enter your name.');
//     if(!myName) {
//         setUserName();
//     }   else {
//         localStorage.setItem('name', myName);
//         myHeading.textContent = 'Welcome to Mozilla, ' + myName;
//     }
// }