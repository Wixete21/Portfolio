import ComponentFactory from "./ComponentFactory";

class Main {
  constructor() {
    this.init();
  }

  init() {
    document.documentElement.classList.add("has-js");

    Icons.load();

    new ComponentFactory();
  }
}
new Main();
