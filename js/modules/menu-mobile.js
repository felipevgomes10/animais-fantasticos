import outsideClick from "./init-outside-click.js";

export default (function menuMobile() {
  const menuButton = document.querySelector("[data-menu='button']");
  const menuList = document.querySelector("[data-menu='list']");
  const eventos = ["touchstart", "click"];

  function openMenu() {
    menuButton.classList.add("active");
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {
    eventos.forEach((evento) => {
      menuButton.addEventListener(evento, openMenu);
    });
  }
})();
