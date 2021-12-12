// JavaScript Document
var hamburgerBtn = document.querySelector('header nav section:nth-of-type(1)');

hamburgerBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    var body = document.querySelector('body');
    body.classList.toggle('toonMenu');
}

//uit de les. Niet naar vragen heb geen idee, maar het werkt
hamburgerBtn.addEventListener('keydown', logKey);
function logKey(e) {
	if(e.code == 'Space' || e.code == 'Enter'){
		toggleMenu();
	}
}
