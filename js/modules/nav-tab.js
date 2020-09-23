export default (function navigationTab() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabList = document.querySelectorAll("[data-tab='list'] section");

  function activeMenu(index) {
    const direcao = tabList[index].dataset.anime;
    tabList.forEach((item) => {
      item.classList.remove("show-down", "show-right");
    });
    tabList[index].classList.add(direcao);
  }

  if (tabList.length && tabMenu.length) {
    tabList[0].classList.add("show-down");

    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeMenu(index);
      });
    });
  }
})();
