import outsideClick from "./init-outside-click.js";

export default class DropdownMenu {
  constructor(dropdowns, events) {
    this.dropdowns = document.querySelectorAll(dropdowns);

    if (events === undefined) this.events = ['touchstart', 'click'];
    else this.events = events;

    this.activeDropdown = this.activeDropdown.bind(this);
    this.activeClass = "active";
  }

  activeDropdown(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownsEvent() {
    this.dropdowns.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdown);
      });
    });
  }

  init() {
    if (this.dropdowns.length) {
      this.addDropdownsEvent();
    }
    return this;
  }
}
