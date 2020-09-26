import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  const targetElement = document.querySelector(target);
  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `
        <h3>${animal.specie}</h3>
        <span data-numeros>${animal.total}</span>
      `

    return div;
  }

  function preencherAnimal(animal) {
    const divAnimal = createAnimal(animal);
    targetElement.appendChild(divAnimal);
  }

  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numeros]", ".numeros", "ativo");
    animaNumeros.init();
  }

  async function criarAnimais() {
    try {
      const animaisJson = await (await fetch(url)).json();
      animaisJson.forEach((animal) => preencherAnimal(animal));
      animaAnimaisNumeros();
    } catch (error) {
      console.log(error);
    }
  }
  return criarAnimais();
}