export default (function scrollReveal() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const halfWindow = window.innerHeight * 0.7;

  function revealScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = sectionTop - halfWindow < 0;

      if (isVisible)
        section.classList.add("ativo");
      else if (section.classList.contains("ativo"))
        section.classList.remove("ativo");
    });
  }

  if (sections.length) {
    sections[0].classList.add("ativo");

    window.addEventListener("scroll", revealScroll);
  }
})();
