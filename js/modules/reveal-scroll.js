export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowMetade = window.innerHeight * 0.7;
    this.revealScroll = this.revealScroll.bind(this);
  }

  revealScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop - this.windowMetade < 0;

      if (isVisible)
        section.classList.add("ativo");
      else if (section.classList.contains("ativo"))
        section.classList.remove("ativo");
    });
  }

  init() {
    this.revealScroll();
    window.addEventListener("scroll", this.revealScroll);
  }
}
