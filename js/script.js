import ScrollSuave from "./modules/smooth-scroll.js";

import navigationTab from "./modules/nav-tab.js";

import accordion from "./modules/accordion.js";

import scrollReveal from "./modules/reveal-scroll.js";

import initModal from "./modules/modal.js";

import tooltip from "./modules/tooltip.js";

import initDropdownMenu from "./modules/dropdown-menu.js";

import menuMobile from "./modules/menu-mobile.js";

import initFuncionamento from "./modules/funcionamento.js";

import initFetchAnimais from "./modules/fetch-animais.js";

import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-anime="suave"] a[href^="#"]',);
scrollSuave.init();