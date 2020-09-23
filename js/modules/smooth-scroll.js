export default (function scrollToSection() {
  const links = document.querySelectorAll('[data-anime="suave"] a[href^="#"]');

  function smoothScroll(e) {
    e.preventDefault();
    const place = e.target;
    const href = place.getAttribute("href");
    const id = document.querySelector(href);

    id.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  if (links.length) {
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll);
    });
  }
})();
