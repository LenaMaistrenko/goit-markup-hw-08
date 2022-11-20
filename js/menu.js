(() => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
      menu: document.querySelector('[data-menu]'),
      body: document.querySelector('body'),
     menuList: document.querySelector('mob-list'),
   // menuPopup: document.querySelector('[data-menu-popup]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);
     refs.menuList.addEventListener('click', removeMenu);
  refs.menu.addEventListener('click', () => refs.menu.classList.add('is-hidden'));
  //refs.menuPopup.addEventListener('click', event => event.stopPropagation());

  function toggleMenu() {
      refs.menu.classList.toggle('is-hidden');
      refs.body.classList.toggle('no-scroll');
    }
      function removeMenu() {
      refs.menu.classList.add('is-hidden');
      refs.body.classList.remove('no-scroll');
  }
})();
