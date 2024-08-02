/**
 * 1- Detect someone clicking the hamburger menu icon with addEventListener on a triggerEl
 * 2- In the event listener functino, add a class to the menu (.menu-open) which translates the menu back into position
 * 3 (bonus task)- Detect when someone clicks the 'close-menu' ID with a second triggerEl and a second click eventlistener
 * 4 (bonus task)- Remove the .menu-open class in the event listener function
 */

let burgerMenuEl = document.getElementById('menu-hamburger');
let hiddenMenuEl = document.getElementById('menu-hidden');
let xMenuEl = document.getElementById('menu-close');

/*
function menuToggle() {
    hiddenMenuEl.classList.toggle('menu-open');
};
*/
const menuToggle = () => hiddenMenuEl.classList.toggle('menu-open')

burgerMenuEl.addEventListener('click', menuToggle);
xMenuEl.addEventListener('click', menuToggle);
