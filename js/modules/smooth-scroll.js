export default class ScrollSuave {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start', }
    } else {
      this.options = options;
    }
    this.smoothScroll = this.smoothScroll.bind(this);
  }

  smoothScroll(event) {
    event.preventDefault();
    const myTarget = event.target;
    const href = myTarget.getAttribute("href");
    const place = document.querySelector(href);

    place.scrollIntoView(this.options);
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener("click", this.smoothScroll);
    });
  }

  init() {
    if (this.linksInternos.length) this.addLinkEvent();
    return this;
  }
}
