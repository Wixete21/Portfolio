
<!DOCTYPE html>
<?php 


if($_POST["comment"]) {


mail("therrienremi@gmail.com", "contact Portfolio",


$_POST["comment"]. "From: an@email.address");


}


?>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Contact</title>

    <link rel="stylesheet" href="styles/main.css" />
    <script src="scripts/main.js" defer></script>
  </head>

  <body data-component="Cursor">
    <div class="site-container">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <header
        class="header"
        data-component="Header"
        data-scroll-limit="0"
        data-auto-hide="true"
      >
        <div class="wrapper">
          <div class="HeaderOrdi">
            <nav class="nav-ordi">
              <h3>Rémi Therrien</h3>
              <ul>
                <li class="li-anime"><a href="index.html">Accueil</a></li>
                <li class="li-anime"><a href="projets.html">Projets</a></li>
                <li class="li-anime">
                  <a href="page-a-propos.html">À propos</a>
                </li>
                <li class="li-anime"><a href="contact.html">Contact</a></li>

                <li>
                  <button class="header__toggle js-toggle">
                    <span></span>
                    <span></span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <div class="contenuContact">
        <div class="wrapper">
          <div class="formulaire">
            <h1>Me contacter</h1>
            <form
              method="post"
              action="envoiEmail.php"
              class="form"
              autocomplete="off"
              data-component="Form"
            >
              <div class="form__body">
                <fieldset class="grid">
                  <div class="input">
                    <label class="input__label" for="fullname">Nom</label>
                    <input
                      class="input__element"
                      type="text"
                      name="fullname"
                      id="fullname"
                      placeholder="ex. Rémi Therrien"
                      required
                    />
                  </div>
                  <div class="input">
                    <label class="input__label" for="email"
                      >Adressse Courriel</label
                    >
                    <input
                      class="input__element"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="ex. therrienremi@gmail.com"
                      required
                    />
                  </div>
                  <div class="input">
                    <label class="input__label" for="phone">Téléphone</label>
                    <input
                      class="input__element"
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="ex. (555) 667-8879"
                      patter="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
                      required
                    />
                  </div>
                  <div class="input textarea u-grid-fullwidth">
                    <label class="input__label" for="comment">Message</label>
                    <textarea
                      class="input__element"
                      name="comment"
                      id="comment"
                      required
                    ></textarea>
                  </div>
                </fieldset>

                <footer class="form__footer">
                  <button class="buttonForm"><span>Envoyer</span></button>
                  <div class="form__confirmation">
                    <h2>Merci</h2>
                    <p>Votre formulaire a bien été envoyé!</p>
                  </div>
                </footer>
              </div>
            </form>
          </div>
          <div class="infoContact">
            <ul>
              <a href="tel:+438-390-9332">
                <li>
                  <svg class="icon icon--md">
                    <use xlink:href="#icon-phone"></use>
                  </svg>
                  438-390-9332
                </li>
              </a>
              <a href="mailto: therrienremi@gmail.com">
                <li>
                  <svg class="icon icon--md">
                    <use xlink:href="#icon-email"></use>
                  </svg>
                  therrienremi@gmail.com
                </li>
              </a>

              <li>
                <a
                  href="http://www.linkedin.com/in/rémi-therrien/"
                  target="_blank"
                >
                  <svg class="icon icon--md">
                    <use xlink:href="#icon-linkedin"></use>
                  </svg>
                </a>
                <a href="http://github.com/Wixete21" target="_blank">
                  <svg class="icon icon--md">
                    <use xlink:href="#icon-github"></use>
                  </svg>
                </a>
              </li>
              <a
                href="assets/images/contact/Curriculum Vitae.pdf"
                target="_blank"
              >
                <li>
                  <svg class="icon icon--md">
                    <use xlink:href="#icon-download"></use>
                  </svg>
                  Téléchargez mon cv
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <footer class="footerContact">
        <p>Rémi Therrien © Tous droits réservés</p>
      </footer>
    </div>
    <div class="cursor"></div>
  </body>
</html>
