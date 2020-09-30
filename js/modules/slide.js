import debounce from "./debounce.js";

export class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
    this.distancia = {
      posicaoFinal: 0,
      startX: 0,
      movimento: 0,
    };
    this.activeClass = 'ativo';
    this.changeEvent = new Event('changeEvent');
  }

  transition(active) {
    this.slide.style.transition = active ? 'transform .3s' : '';
  }

  moveSlide(distX) {
    this.distancia.savePosition = distX;
    this.slide.style.transform = `translate3d(${distX}px, 0, 0)`;
  }

  updatePosition(clientX) {
    this.distancia.movimento = (this.distancia.startX - clientX) * 1.6;
    return this.distancia.posicaoFinal - this.distancia.movimento;
  }

  onStart(event) {
    let moveType;
    if (event.type === 'mousedown') {
      event.preventDefault();
      this.distancia.startX = event.clientX;
      moveType = 'mousemove';
    } else {
      this.distancia.startX = event.changedTouches[0].clientX;
      moveType = 'touchmove';
    }
    this.wrapper.addEventListener(moveType, this.onMove);
    this.transition(false);
  }

  onMove(event) {
    const clientX = (event.type === 'mousemove') ? event.clientX : event.changedTouches[0].clientX;
    const posicaoFinal = this.updatePosition(clientX);
    this.moveSlide(posicaoFinal);
  }

  onEnd(event) {
    const moveType = (event.type === 'mouseup') ? 'mousemove' : 'touchmove';
    this.wrapper.removeEventListener(moveType, this.onMove);
    this.distancia.posicaoFinal = this.distancia.savePosition;
    this.transition(true);
    this.chandeSlideOnEnd();
  }

  chandeSlideOnEnd() {
    if (this.distancia.movimento > 120 && this.index.next !== undefined) {
      this.activeNextSlide();
    } else if (this.distancia.movimento < -120 && this.index.prev !== undefined) {
      this.activePrevSlide();
    } else {
      this.changeSlide(this.index.active);
    }
  }

  addSlideEvents() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('touchstart', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
    this.wrapper.addEventListener('touchend', this.onEnd);
  }

  slidePosition(slide) {
    const margem = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;
    return -(slide.offsetLeft - margem);
  }

  slidesConfig() {
    this.slideArray = [...this.slide.children].map((element) => {
      const posicao = this.slidePosition(element);
      return { element, posicao }
    });
  }

  slideIndexNav(index) {
    const last = this.slideArray.length - 1;
    this.index = {
      prev: index ? index - 1 : undefined,
      active: index,
      next: index === last ? undefined : index + 1,
    }
  }

  changeSlide(index) {
    const activeSlide = this.slideArray[index];
    this.moveSlide(activeSlide.posicao);
    this.slideIndexNav(index);
    this.distancia.posicaoFinal = activeSlide.posicao;
    this.changeActiveClass();
    this.wrapper.dispatchEvent(this.changeEvent);
  }

  changeActiveClass() {
    this.slideArray.forEach(({ element }) => element.classList.remove(this.activeClass));
    this.slideArray[this.index.active].element.classList.add(this.activeClass);
  }

  activePrevSlide() {
    if (this.index.prev !== undefined) this.changeSlide(this.index.prev)
  }

  activeNextSlide() {
    if (this.index.next !== undefined) this.changeSlide(this.index.next)
  }

  onResize() {
    setTimeout(() => {
      this.slidesConfig();
      this.changeSlide(this.index.active);
    }, 1000);
  }

  addResizeEvent() {
    window.addEventListener('resize', this.onResize);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
    this.onResize = debounce(this.onResize.bind(this), 200);
    this.activePrevSlide = this.activePrevSlide.bind(this);
    this.activeNextSlide = this.activeNextSlide.bind(this);
  }

  init() {
    this.bindEvents();
    this.slidesConfig();
    this.changeSlide(3);
    this.addSlideEvents();
    this.addResizeEvent();
    return this;
  }
}

export default class SlideNav extends Slide {
  constructor(slide, wrapper) {
    super(slide, wrapper);
    this.bindControlEvents();
  }

  addArrow(prev, next) {
    this.prevElement = document.querySelector(prev);
    this.nextElement = document.querySelector(next);
    this.transition(true);
    this.addArrowEvent();
  }

  addArrowEvent() {
    this.prevElement.addEventListener('click', this.activePrevSlide);
    this.nextElement.addEventListener('click', this.activeNextSlide);
  }

  createControl() {
    const control = document.createElement('ul');
    control.dataset.control = 'slide';

    this.slideArray.forEach((slide, index) => {
      control.innerHTML += `
        <li><a href="#slide${index + 1}">${index + 1}</a></li>
      `
    });
    this.wrapper.appendChild(control);
    return control;
  }

  eventControl(item, index) {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      this.changeSlide(index);
    });
    this.wrapper.addEventListener('changeEvent', this.activeControlItem)
  }

  activeControlItem() {
    this.controlArray.forEach((item) => item.classList.remove(this.activeClass));
    this.controlArray[this.index.active].classList.add(this.activeClass);
  }

  addControl(customControl) {
    this.control = document.querySelector(customControl) || this.createControl();
    this.controlArray = [...this.control.children];
    this.controlArray.forEach(this.eventControl);
    this.activeControlItem();
  }

  bindControlEvents() {
    this.eventControl = this.eventControl.bind(this);
    this.activeControlItem = this.activeControlItem.bind(this);
  }
}