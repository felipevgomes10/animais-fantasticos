export default (function tooltipFunction() {
  const tooltip = document.querySelectorAll("[data-tooltip]");

  function createTooltip(element) {
    const tooltipBox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tooltipBox.classList.add("tooltip");
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);

    return tooltipBox;
  }

  const onMouseMove = {
    handleEvent(e) {
      this.tooltipBox.style.top = `${e.pageY + 20}px`;
      this.tooltipBox.style.left = `${e.pageX}px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener("mousemove", onMouseMove);
      this.element.removeEventListener("mouseleave", onMouseLeave);
    },
  };

  function onMouseOver() {
    const tooltipBox = createTooltip(this);

    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener("mousemove", onMouseMove);
    this.addEventListener("mouseleave", onMouseLeave);
  }

  tooltip.forEach((item) => {
    item.addEventListener("mouseover", onMouseOver);
  });
})();
