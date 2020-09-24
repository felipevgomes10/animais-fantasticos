export default class Accordion {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.activeClass = 'ativo';
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(question) {
    question.classList.toggle(this.activeClass);
    question.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.accordionList.forEach((question) => {
      question.addEventListener("click", () => this.toggleAccordion(question));
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent()
    }
  }
}
