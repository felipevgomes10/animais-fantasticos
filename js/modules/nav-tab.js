export default class TabNav {
  constructor(list, content) {
    this.list = document.querySelectorAll(list);
    this.content = document.querySelectorAll(content);
    this.activeClass = 'ativo'
  }

  activeMenu(index) {
    this.content.forEach((item) => {
      item.classList.remove(this.activeClass);
    });
    const direcao = this.content[index].dataset.anime;
    this.content[index].classList.add(this.activeClass, direcao);
  }

  addTabNavEvent() {
    this.list.forEach((item, index) => {
      item.addEventListener("click", () => this.activeMenu(index));
    });
  }

  init() {
    if (this.content.length && this.list.length) {
      this.activeMenu(0);
      this.addTabNavEvent();
    }
  }
}
