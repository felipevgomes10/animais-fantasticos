export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }

  createTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    this.tooltipBox = tooltipBox;
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = `${event.pageY + 20}px`;
    if ((event.pageX + 240) > window.innerWidth)
      this.tooltipBox.style.left = `${event.pageX - 200}px`;
    else
      this.tooltipBox.style.left = `${event.pageX}px`;
  }

  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove();
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
    currentTarget.removeEventListener("mouseleave", this.onMouseLeave);
  }

  onMouseOver({ currentTarget }) {
    this.createTooltip(currentTarget);

    currentTarget.addEventListener("mousemove", this.onMouseMove);
    currentTarget.addEventListener("mouseleave", this.onMouseLeave);
  }

  addTootipsEvent() {
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver);
    });
  }

  init() {
    if (this.tooltips.length) {
      this.addTootipsEvent();
    }
    return this
  }
}
