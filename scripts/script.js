// JavaScript Document
var hamburgerBtn = document.querySelector('header nav section:nth-of-type(1)');

hamburgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    var body = document.querySelector('body');
    body.classList.toggle('toonMenu');
}
