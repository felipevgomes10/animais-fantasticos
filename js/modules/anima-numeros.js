export default function initAnimaNumeros() {
  function animNumbers() {
    const numbers = document.querySelectorAll("[data-numeros]");
    numbers.forEach((number) => {
      const total = +number.innerText;
      const increment = total / 200;
      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        number.innerText = Math.floor(start);
        if (start > total) {
          number.innerText = total;
          clearInterval(timer);
        }
      }, 30 * Math.random());
    });
  }

  let observer;
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains("ativo")) {
      observer.disconnect();
      animNumbers();
    }
  }
  const observerTarget = document.querySelector(".numeros");
  observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, { attributes: true });
}
