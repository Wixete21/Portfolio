import Swiper from "swiper/bundle";

/** Composante Carousel de Timtools */
export default class Carousel {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;

    // Options par défaut pour la librairie Swiper
    this.defaultOptions = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 1,
        },
      },
    };

    this.init();
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    let options = this.defaultOptions;

    // Gestion des paramètres différents lorsqu'on veut avoir
    // 2 slides visibles sur grand écran et une seule sur petit écran
    if (this.element.dataset.carousel == "split") {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
          breakpoints: {
            768: {
              slidesPerView: 2,
            },
          },
        },
      };
    }

    // Gestion des paramètres différents lorsqu'on veut avoir
    // 2 slides visibles sur grand écran et une seule sur petit écran
    if (this.element.dataset.carousel == "scroll") {
      options = {
        ...this.defaultOptions,
        ...{
          // slidesPerView: 1,
          scrollbar: {
            el: ".swiper-scrollbar",
            draggable: true,
          },
          navigation: false,
          pagination: false,
        },
      };
    }
    if (this.element.dataset.carousel == "solo") {
      options = {
        ...this.defaultOptions,
        ...{
          slidesPerView: 1,
          spaceBetween: 500,
          loop: false,
          centeredSlides: true,

          breakpoints: {
            768: {
              slidesPerView: 1,
            },
          },
        },
      };
    }

    if (this.element.dataset.carousel == "rotation") {
      options = {
        ...{
          slidesPerView: 2,
          effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          loop: true,

          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
          pagination: {
            el: ".swiper-pagination",
          },
          breakpoints: {
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          },
        },
      };
    }

    // Instanciation d'un nouveau Swiper avec les options
    new Swiper(this.element, options);
  }
}
