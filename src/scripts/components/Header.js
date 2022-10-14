/** Composante Header de Timtools */
export default class Header {
  /**
   * Méthode constructor
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.scrollPosition = 0;
    this.scrollLimit = 0.2;
    this.lastScrollPosition = 0;
    this.html = document.documentElement;

    this.init();
    this.initNavMobile();
    this.initNav2();
  }
  /**
   * Méthode d'initialisation
   */
  init() {
    window.addEventListener("scroll", this.onScroll.bind(this));
  }
  /**
   * Méthode OnScroll
   * On récupaire la dernière position de notre position de scroll par rapport au top
   * @param {Event} event - événement qui va être appeller lors du scroll
   */
  onScroll(event) {
    this.lastScrollPosition = this.scrollPosition;
    this.scrollPosition = document.scrollingElement.scrollTop;

    this.setHeaderState();
    this.setDirectionState();
  }
  /**
   * Méthode SetHeaderState
   * Cache ou montre le header dependament si notre position dépasse ou non notre scrollHeight
   * */
  setHeaderState() {
    const scrollHeight = document.scrollingElement.scrollHeight;

    if (this.scrollPosition > scrollHeight * this.scrollLimit) {
      this.html.classList.add("header-is-hidden");
    } else {
      this.html.classList.remove("header-is-hidden");
    }
  }
  /**
   * Méthode setDirectionState
   * Sert à savoir si on scroll vers le bas ou vers le haut
   * */
  setDirectionState() {
    if (this.scrollPosition >= this.lastScrollPosition) {
      this.html.classList.add("is-scrolling-down");
      this.html.classList.remove("is-scrolling-up");
    } else {
      this.html.classList.remove("is-scrolling-down");
      this.html.classList.add("is-scrolling-up");
    }
  }
  /**
   * Méthode initNavMobile
   * On met un toggle sur notre boutton qui ouvre le nav en mobile
   * */
  initNavMobile() {
    const toggle = this.element.querySelector(".js-toggle");

    toggle.addEventListener("click", this.onToggleNav.bind(this));
  }
  initNav2() {
    const toggleMobile = this.element.querySelector(".js-toggle-mobile");
    toggleMobile.addEventListener("click", this.onToggleNavMobile.bind(this));
  }

  /**
   * Méthode onToggleNav
   * Ouvre le nav et change le button
   * */
  onToggleNav() {
    this.html.classList.toggle("nav-is-active");
    const toggle = this.element.querySelector(".js-toggle");
    toggle.classList.toggle("nav-is-active");
  }
  onToggleNavMobile() {
    this.html.classList.toggle("nav-is-active-mobile");
    const toggleMobile = this.element.querySelector(".js-toggle-mobile");
    toggleMobile.classList.toggle("nav-is-active-mobile");
  }
}
