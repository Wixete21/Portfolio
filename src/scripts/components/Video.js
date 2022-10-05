/** Composante  de TimTools */
export default class Video {
  /**
   * Méthode constructeur
   * @param {HTMLElement} element - Élément HTML sur lequel la composante est instanciée
   */
  constructor(element) {
    this.element = element;

    //variables pour la video et le poster
    this.videoContainer = this.element.querySelector(".js-video");
    this.poster = this.element.querySelector(".js-poster");
    this.button = this.element.querySelector(".buttonVideo");
    //Options des paramètres des videos
    this.videoId = this.element.dataset.videoId;
    this.controls = this.element.dataset.controls;
    this.autoplay = this.poster ? 1 : 0;
    this.playerReady = false;

    Video.instances.push(this);

    //Appel méthode pour loader les videos si les videos ont un data-video-id
    if (this.videoId) {
      Video.loadScript();
    } else {
      console.error("Vous devez spécifier un id");
    }
  }

  //Loader les videos
  static loadScript() {
    if (!Video.scriptIsLoading) {
      Video.scriptIsLoading = true;

      const script = document.createElement("script");
      script.src = "https://www.youtube.com/iframe_api";
      document.body.appendChild(script);
    }
  }

  /**
   * Méthode d'initialisation
   */
  init() {
    this.initPlayer = this.initPlayer.bind(this);

    if (this.poster) {
      this.button.addEventListener("click", this.initPlayer);
    } else {
      this.initPlayer();
    }
  }

  /**
   * Méthode d'initialisation du player
   */
  initPlayer(event) {
    if (event) {
      this.element.removeEventListener("click", this.initPlayer);
    }
    // Options par défaut pour la video
    this.player = new YT.Player(this.videoContainer, {
      height: "100%",
      width: "100%",
      videoId: this.videoId,
      playerVars: { rel: 0, controls: this.controls, autoplay: this.autoplay }, //rel pour avoir des suggestions de vidéo en lien avec la vidéo

      events: {
        onReady: () => {
          this.playerReady = true;

          const observer = new IntersectionObserver(this.watch.bind(this), {
            rootMargin: "0px 0px 0px 0px",
          });
          observer.observe(this.element);
        },
        onStateChange: (event) => {
          if (event.data == YT.PlayerState.PLAYING) {
            // pause tous les vidéos sauf celui qui joue
            Video.pauseAll(this);
          } else if (event.data == YT.PlayerState.ENDED) {
            //Lorsque la vidéo a fini de jouer, la vidéo retourne au début (0 seconde) et se met à pause
            this.player.seekTo(0);
            this.player.pauseVideo();
          }
        },
      },
    });
  }

  /**
   * Méthode pour regarder si il y a des intersections pour mettre à pause
   */
  watch(entries) {
    if (this.playerReady && !entries[0].isIntersecting) {
      this.player.pauseVideo();
    }
  }

  /**
   * Méthode d'initialisation
   */
  static initAll() {
    document.documentElement.classList.add("is-video-ready");

    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];
      instance.init();
    }
  }

  /**
   * Méthode de pause
   */
  static pauseAll(currentInstance) {
    for (let i = 0; i < Video.instances.length; i++) {
      const instance = Video.instances[i];
      if (instance.playerReady && instance !== currentInstance) {
        instance.player.pauseVideo();
      }
    }
  }
}

//Création d'instances
Video.instances = [];
window.onYouTubeIframeAPIReady = Video.initAll;
