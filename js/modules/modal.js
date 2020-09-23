export default (function initModal() {
  const botaoAbrir = document.querySelector("[data-modal='abrir'");
  const botaoFechar = document.querySelector('[data-modal="fechar"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toggleModal(e) {
    e.preventDefault();
    containerModal.classList.toggle("ativo");
  }

  function cliqueFora(e) {
    const modal = e.target;
    if (modal === this) {
      toggleModal(e);
    }
  }

  if (botaoAbrir && botaoFechar && containerModal) {
    botaoAbrir.addEventListener("click", toggleModal);

    botaoFechar.addEventListener("click", toggleModal);

    containerModal.addEventListener("click", cliqueFora);
  }
})();
