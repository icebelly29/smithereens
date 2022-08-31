const menuToggle = document.querySelector('.toggle');
const wall = document.querySelector('.wall');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('toggled');
  wall.classList.toggle('toggled');
})