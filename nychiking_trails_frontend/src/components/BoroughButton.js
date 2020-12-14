class BoroughButton {
  static container = document.querySelector(".buttons");

  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.render();
  }

  static retrieveBoroughs() {
    api
      .retrieveBoroughs()
      .then((boroughs) =>
        boroughs.forEach(
          (borough) => new BoroughButton(borough.name, borough.id)
        )
      );
  }

  render = () => {
    const button = document.createElement("div");
    button.className = "borough";
    button.dataset.id = this.id;
    this.button = button;
    this.renderInnerHTML();
    this.attachEventListener(button);
    this.constructor.container.append(button);
  };

  renderInnerHTML() {
    this.button.innerHTML = `
      <button class="button"> ${this.name} </button>
    `;
  }

  attachEventListener = (div) => {
    div.addEventListener("click", () => this.handleOnClick());
  };

  handleOnClick() {
    api.retrieveTrails(this.id);
    TrailComponent.getButtonClick();
  }
}
