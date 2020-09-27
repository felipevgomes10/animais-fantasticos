export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass
  }

  dadosFuncionamento() {
    this.daysOpen = this.funcionamento.dataset.semana.split(",").map(Number);
    this.hoursOpen = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora() {
    this.date = new Date();
    this.today = this.date.getDay();
    this.hour = this.date.getUTCHours() - 3;
  }

  estaAberto() {
    const isItOpen = this.daysOpen.indexOf(this.today) !== -1;
    const isHour = (this.hour >= this.hoursOpen[0] && this.hour < this.hoursOpen[1]);

    return isItOpen && isHour;
  }

  ativaAberto() {
    if (this.estaAberto()) this.funcionamento.classList.add(this.activeClass);
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    };
  }
}
