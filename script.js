const hamBOpen = document.querySelector('.ham-b');
const hamBClose = document.querySelector('.close');
const menu = document.querySelector('.menu');

hamBOpen.addEventListener('click', () => {
  menu.classList.add('active');
});

hamBClose.addEventListener('click', () => {
    menu.classList.remove('active')
});
