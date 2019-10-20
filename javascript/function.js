const menu = document.querySelector('.main-menu-switch');
const menuTrigger = document.querySelectorAll('.menu-toggle');
menuTrigger.forEach(btn => {
  btn.addEventListener('click', function () {
    menuTrigger.forEach(b => {
      b.classList.toggle('toggle-switch-menu-open');
    });
    menu.classList.toggle('toggle-switch');
  });
});
