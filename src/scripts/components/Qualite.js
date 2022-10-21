/** Composante Header de Timtools */
export default class Qualite {
  /**
   * Méthode constructor
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;
    this.html = document.documentElement;

    this.init();
  }
  /**
   * Méthode d'initialisation
   */
  init() {
    const qualite1 = this.element.querySelector(".qualitesMystere1");
    qualite1.addEventListener("click", this.onClickQualite1.bind(this));

    const qualite2 = this.element.querySelector(".qualitesMystere2");
    qualite2.addEventListener("click", this.onClickQualite2.bind(this));

    const qualite3 = this.element.querySelector(".qualitesMystere3");
    qualite3.addEventListener("click", this.onClickQualite3.bind(this));

    const qualite4 = this.element.querySelector(".qualitesMystere4");
    qualite4.addEventListener("click", this.onClickQualite4.bind(this));

    const qualite5 = this.element.querySelector(".qualitesMystere5");
    qualite5.addEventListener("click", this.onClickQualite5.bind(this));
  }

  onClickQualite1() {
    const qualite1 = this.element.querySelector(".qualitesMystere1");
    qualite1.classList.add("qualitedevoile");
  }

  onClickQualite2() {
    const qualite2 = this.element.querySelector(".qualitesMystere2");
    qualite2.classList.add("qualitedevoile");
  }

  onClickQualite3() {
    const qualite3 = this.element.querySelector(".qualitesMystere3");
    qualite3.classList.add("qualitedevoile");
  }

  onClickQualite4() {
    const qualite4 = this.element.querySelector(".qualitesMystere4");
    qualite4.classList.add("qualitedevoile");
  }

  onClickQualite5() {
    const qualite5 = this.element.querySelector(".qualitesMystere5");
    qualite5.classList.add("qualitedevoile");
  }

  onClickLi() {}
}
