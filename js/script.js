import ScrollSuave from "./modules/smooth-scroll.js";

import Accordion from "./modules/accordion.js";

import TabNav from "./modules/nav-tab.js";

import Modal from "./modules/modal.js";

import Tooltip from "./modules/tooltip.js";

import fetchBitcoin from "./modules/fetch-bitcoin.js";

import fetchAnimais from "./modules/fetch-animais.js";

import scrollReveal from "./modules/reveal-scroll.js";

import initDropdownMenu from "./modules/dropdown-menu.js";

import menuMobile from "./modules/menu-mobile.js";

import initFuncionamento from "./modules/funcionamento.js";


const scrollSuave = new ScrollSuave('[data-anime="suave"] a[href^="#"]',);
scrollSuave.init();

const accordion = new Accordion("[data-anime='accordion'] dt");
accordion.init();

const tabnav = new TabNav("[data-tab='menu'] li", "[data-tab='list'] section");
tabnav.init();

const modal = new Modal("[data-modal='abrir'", "[data-modal='fechar']", "[data-modal='container']");
modal.init();

const tooltip = new Tooltip("[data-tooltip]");
tooltip.init();

fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

fetchAnimais('../../animaisapi.json', '.numeros-grid');