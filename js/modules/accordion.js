export default (function accordion() {
  const accordionQuestions = document.querySelectorAll(
    "[data-anime='accordion'] dt"
  );

  function activeAccordion() {
    this.classList.toggle("ativo");
    this.nextElementSibling.classList.toggle("ativo");
  }

  if (accordionQuestions.length) {
    accordionQuestions[0].classList.add("ativo");
    accordionQuestions[0].nextElementSibling.classList.add("ativo");

    accordionQuestions.forEach((question) => {
      question.addEventListener("click", activeAccordion);
    });
  }
})();
