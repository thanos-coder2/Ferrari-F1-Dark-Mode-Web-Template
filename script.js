
//Hamburger button
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});