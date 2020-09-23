export default (function initFuncionamento() {
  const functioning = document.querySelector("[data-semana]");

  const daysOpen = functioning.dataset.semana.split(",").map(Number);
  const hoursOpen = functioning.dataset.horario.split(",").map(Number);

  const date = new Date();
  const today = date.getDay();
  const hour = date.getHours();

  const isItOpen = daysOpen.indexOf(today) !== -1;
  const isHour = hour >= hoursOpen[0] && hour < hoursOpen[1];

  if (isHour && isItOpen) {
    functioning.classList.add("aberto");
  }
})();
