export default class AnimaNumeros {
  constructor(numeros, observerTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observerTarget = document.querySelector(observerTarget);
    this.observerClass = observerClass;
    this.handleMutation = this.handleMutation.bind(this);
  }

  static incrimentarNumero(numero) {
    const total = +numero.innerText;
    const increment = total / 200;
    let start = 0;
    const timer = setInterval(() => {
      start += increment;
      numero.innerText = Math.floor(start);
      if (start > total) {
        numero.innerText = total;
        clearInterval(timer);
      }
    }, 30 * Math.random());
  }

  animNumbers() {
    this.numeros.forEach((numero) => this.constructor.incrimentarNumero(numero));
  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.animNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    this.observer.observe(this.observerTarget, { attributes: true });
  }

  init() {
    if (this.numeros.length && this.observerTarget) this.addMutationObserver();
    return this;
  }
}